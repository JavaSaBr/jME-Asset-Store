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
import com.jme.asset.store.db.repository.asset.FileTypeRepository;
import com.jme.asset.store.service.AssetService;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.engine.jdbc.LobCreator;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManagerFactory;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.sql.Blob;
import java.util.List;
import java.util.NoSuchElementException;

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
     * The file type repository
     */
    @NotNull
    private final FileTypeRepository fileTypeRepository;

    @Autowired
    public AssetServiceImpl(@NotNull final EntityManagerFactory entityManagerFactory,
                            @NotNull final AssetRepository assetRepository,
                            @NotNull final FileRepository fileRepository, @NotNull FileTypeRepository fileTypeRepository) {
        this.entityManagerFactory = entityManagerFactory;
        this.assetRepository = assetRepository;
        this.fileRepository = fileRepository;
        this.fileTypeRepository = fileTypeRepository;
    }

    @Override
    public @NotNull FileEntity createFile(@NotNull final String fileName, @NotNull final UserEntity user,
                                          @NotNull final InputStream inputStream, final long id) {
        Path temp = null;
        try {

            temp = Files.createTempFile("upload", fileName);

            Files.copy(inputStream, temp, StandardCopyOption.REPLACE_EXISTING);

            try (final InputStream in = Files.newInputStream(temp)) {
                return createFileEntity(fileName, user, in, Files.size(temp), id);
            }

        } catch (final IOException e) {
            throw new RuntimeException(e);
        } finally {
            safeDelete(temp);
        }
    }

    /**
     * Creates a new file entity.
     *
     * @param fileName      the file name.
     * @param user          the user.
     * @param content       the content.
     * @param contentLength the content length.
     * @return the created file entity.
     */
    private @NotNull FileEntity createFileEntity(@NotNull final String fileName, @NotNull final UserEntity user,
                                                 @NotNull final InputStream content, final long contentLength,
                                                 final long id) {

        final SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        try (final Session session = sessionFactory.openSession()) {

            final LobCreator lobCreator = getLobCreator(session);
            final Blob blob = lobCreator.createBlob(content, contentLength);

            final FileEntity fileEntity = new FileEntity();
            fileEntity.setName(fileName);
            fileEntity.setCreator(user);
            fileEntity.setContent(blob);
            FileTypeEntity type = fileTypeRepository.findById(id).orElse(null);
            fileEntity.setType(type);

            fileRepository.save(fileEntity);

            return fileEntity;
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
    public void addFileToAsset(@NotNull final FileEntity file, final long id) {
        AssetEntity asset = assetRepository.findById(id).orElse(null);
        if (asset == null) throw new NoSuchElementException("No asset with id: " + id);
        asset.addFile(file);
        assetRepository.save(asset);
    }

    @Override
    public void removeFileFromAsset(@NotNull final FileEntity file, final long id) {
        AssetEntity asset = assetRepository.findById(id).orElse(null);
        if (asset == null) throw new NoSuchElementException("No asset with id: " + id);
        asset.removeFile(file);
        assetRepository.save(asset);
    }

    @Override
    public @Nullable List<AssetEntity> getUserAssets(long id) {
        final List<AssetEntity> assets = assetRepository.findAllByCreator_Id(id);
        return assets;
    }
}
