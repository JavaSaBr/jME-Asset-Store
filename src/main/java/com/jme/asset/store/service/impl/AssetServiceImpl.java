package com.jme.asset.store.service.impl;

import static com.jme.asset.store.util.Utils.safeDelete;
import static org.hibernate.Hibernate.getLobCreator;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileEntity;
import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.db.repository.asset.AssetRepository;
import com.jme.asset.store.db.repository.asset.FileRepository;
import com.jme.asset.store.service.AssetService;
import com.jme.asset.store.service.FileTypeService;
import com.ss.rlib.util.FileUtils;
import com.ss.rlib.util.IOUtils;
import com.ss.rlib.util.StringUtils;
import com.ss.rlib.util.array.Array;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.engine.jdbc.LobCreator;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManagerFactory;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

/**
 * The main implementation of the {@link AssetService}.
 */
@Service
public class AssetServiceImpl implements AssetService {

    /**
     * The entity manager.
     */
    @NotNull
    private final EntityManagerFactory entityManagerFactory;

    /**
     * The asset repository.
     */
    @NotNull
    private final AssetRepository assetRepository;

    /**
     * The file repository.
     */
    @NotNull
    private final FileRepository fileRepository;

    /**
     * The file type service.
     */
    @NotNull
    private final FileTypeService fileTypeService;

    @Autowired
    public AssetServiceImpl(@NotNull final EntityManagerFactory entityManagerFactory,
                            @NotNull final AssetRepository assetRepository,
                            @NotNull final FileRepository fileRepository, @NotNull final FileTypeService fileTypeService) {
        this.entityManagerFactory = entityManagerFactory;
        this.assetRepository = assetRepository;
        this.fileRepository = fileRepository;
        this.fileTypeService = fileTypeService;
    }

    @Override
    public @NotNull FileEntity createFile(@NotNull final String fileName,
                                          @NotNull final UserEntity user,
                                          @NotNull final InputStream inputStream,
                                          @NotNull final FileTypeEntity fileType) {
        Path temp = null;
        try {
            temp = Files.createTempFile("upload", fileName);
            Files.copy(inputStream, temp, StandardCopyOption.REPLACE_EXISTING);
            try (final InputStream in = Files.newInputStream(temp)) {
                return createFileEntity(fileName, user, in, fileType, Files.size(temp));
            }
        } catch (final IOException e) {
            throw new RuntimeException(e);
        } finally {
            safeDelete(temp);
        }
    }

    @Override
    public @NotNull AssetEntity createAsset(@NotNull final String nameAsset, @Nullable final String description,
                                            @NotNull final UserEntity user,
                                            @NotNull final AssetCategoryEntity category) {
        final AssetEntity assetEntity = new AssetEntity();
        assetEntity.setName(nameAsset);
        assetEntity.setDescription(description);
        assetEntity.setCreator(user);
        assetEntity.setCategory(category);
        assetRepository.save(assetEntity);
        return assetEntity;
    }

    @Override
    public void addFileToAsset(@NotNull final FileEntity file, @NotNull final AssetEntity asset) {
        asset.addFile(file);
        assetRepository.save(asset);
    }

    @Override
    public void removeFileFromAsset(@NotNull final FileEntity file, @NotNull final AssetEntity asset) {
        asset.removeFile(file);
        assetRepository.save(asset);
    }

    @Override
    public @Nullable List<AssetEntity> getUserAssets(@NotNull final UserEntity creator) {
        return assetRepository.findAllByCreator(creator);
    }

    @Override
    public @Nullable AssetEntity getAsset(final long id) {
        return assetRepository.findById(id).orElse(null);
    }

    @Override
    public @NotNull List<String> addZipFileToAsset(@NotNull final UserEntity user, @NotNull final InputStream content,
                                                   @NotNull final MultipartFile file, @NotNull final AssetEntity asset) {
        final List<String> warnings = new ArrayList<>();
        Path tempFilePath = null;
        Path tempDirPath = null;
        try {

            tempFilePath = Files.createTempFile(file.getName(), ".zip");
            tempDirPath = Files.createTempDirectory("upload");

            Files.copy(content, tempFilePath, StandardCopyOption.REPLACE_EXISTING);
            FileUtils.unzip(tempDirPath, tempFilePath);

            final Array<Path> files = FileUtils.getFiles(tempDirPath, false);

            for (final Path path : files) {

                final String extension = FileUtils.getExtension(path);
                if (StringUtils.isEmpty(extension)) {
                    warnings.add("Unknown type of file: " + path.toFile().getName() + " . It will be skipped");
                    continue;
                }

                final FileTypeEntity type = fileTypeService.findType(extension, null);
                if (type == null) {
                    warnings.add("Unknown type of file: " + path.toFile().getName() + " . It will be skipped");
                    continue;
                }

                try (final InputStream in = Files.newInputStream(path)) {
                    final String fileName = path.getFileName().toString();
                    final FileEntity newFile = createFileEntity(fileName, user, in, type, Files.size(path));
                    addFileToAsset(newFile, asset);
                }
            }

        } catch (final IOException e) {
            throw new RuntimeException(e);
        } finally {
            safeDelete(tempFilePath);
            safeDelete(tempDirPath);
        }

        return warnings;
    }

    @Override
    public @NotNull Path downloadAsset(@NotNull final AssetEntity asset) {
        final List<FileEntity> files = asset.getFiles();
        Path tempDirectory = null;
        try {
            tempDirectory = Files.createTempDirectory(asset.getName());
            if (files == null) {
                return pathToZip(tempDirectory, asset.getName());
            }
            for (FileEntity file : files) {
                final Blob content = file.getContent();
                final String extension = file.getType().getExtension();
                final String fileName = file.getName().replaceFirst('.' + extension, "");
                final Path tempFile = Files.createTempFile(tempDirectory, fileName, '.' + extension);
                Files.copy(content.getBinaryStream(), tempFile, StandardCopyOption.REPLACE_EXISTING);
            }
            return pathToZip(tempDirectory, asset.getName());
        } catch (final Exception e) {
            throw new RuntimeException(e);
        } finally {
            safeDelete(tempDirectory);
        }
    }

    @Override
    public void removeAsset(final @NotNull AssetEntity assetEntity) {
        assetRepository.delete(assetEntity);
    }

    private @NotNull Path pathToZip(@NotNull final Path path, @NotNull final String assetName) {

        ZipOutputStream zipOutputStream = null;
        try {

            final Path tempZipFile = Files.createTempFile(assetName, ".zip");
            zipOutputStream = new ZipOutputStream(Files.newOutputStream(tempZipFile));

            for (final Path file : FileUtils.getFiles(path, false)) {
                addNewZipEntry(zipOutputStream, path, file);
            }

            return tempZipFile;

        } catch (final IOException e) {
            throw new RuntimeException(e);
        } finally {
            IOUtils.close(zipOutputStream);
        }
    }

    private void addNewZipEntry(@NotNull final ZipOutputStream zipOutputStream,
                                @NotNull final Path dir,
                                @NotNull final Path file) {

        final Path fullPath = dir.resolve(file);

        try (final InputStream inputStream = Files.newInputStream(fullPath)) {
            final String fileName = file.getFileName().toString();
            final ZipEntry entry = new ZipEntry(fileName);
            zipOutputStream.putNextEntry(entry);
            IOUtils.copy(inputStream, zipOutputStream, new byte[512], false);
            zipOutputStream.closeEntry();
        } catch (final IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Creates a new file entity.
     *
     * @param fileName      the file name.
     * @param user          the user.
     * @param content       the content.
     * @param fileType      the file type.
     * @param contentLength the content length.
     * @return the created file entity.
     */
    private @NotNull FileEntity createFileEntity(@NotNull final String fileName,
                                                 @NotNull final UserEntity user,
                                                 @NotNull final InputStream content,
                                                 @NotNull final FileTypeEntity fileType,
                                                 final long contentLength) {

        final SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);

        try (final Session session = sessionFactory.openSession()) {

            final LobCreator lobCreator = getLobCreator(session);
            final Blob blob = lobCreator.createBlob(content, contentLength);
            final FileEntity fileEntity = new FileEntity();
            fileEntity.setName(fileName);
            fileEntity.setCreator(user);
            fileEntity.setContent(blob);
            fileEntity.setType(fileType);

            fileRepository.save(fileEntity);

            return fileEntity;
        }
    }
}
