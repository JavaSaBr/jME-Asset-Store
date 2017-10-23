package com.jme.asset.store.service;

import com.jme.asset.store.entity.AssetEntity;
import com.jme.asset.store.entity.FileEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.AssetRepository;
import com.jme.asset.store.repository.FileRepository;
import org.hibernate.SessionFactory;
import org.hibernate.engine.jdbc.LobCreator;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManagerFactory;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.sql.Blob;
import java.util.List;
import java.util.NoSuchElementException;

import static org.hibernate.Hibernate.getLobCreator;

@Service
public class AssetServiceImpl implements AssetService {

    private final EntityManagerFactory entityManagerFactory;
    private final AssetRepository assetRepository;
    private final FileRepository fileRepository;

    @Autowired
    public AssetServiceImpl(EntityManagerFactory entityManagerFactory, AssetRepository assetRepository,
                            FileRepository fileRepository) {
        this.entityManagerFactory = entityManagerFactory;
        this.assetRepository = assetRepository;
        this.fileRepository = fileRepository;
    }

    @Override
    public void createFile(@NotNull final String fileName, @NotNull final UserEntity user,
                           @NotNull final InputStream inputStream) {
        Path temp = null;
        try {

            temp = Files.createTempFile("upload", fileName);

            Files.copy(inputStream, temp, StandardCopyOption.REPLACE_EXISTING);

            try (final InputStream in = Files.newInputStream(temp)) {
                final long size = Files.size(temp);
                createFileEntity(fileName, user, in, size);
            }

        } catch (final IOException e) {
            throw new RuntimeException(e);
        } finally {
            safeDelete(temp);
        }
    }

    private @NotNull FileEntity createFileEntity(@NotNull final String fileName, @NotNull final UserEntity user,
                                                 @NotNull final InputStream content, final long contentLength) {

        final SessionFactory sessionFactory = entityManagerFactory.unwrap(SessionFactory.class);
        final LobCreator lobCreator = getLobCreator(sessionFactory.getCurrentSession());
        final Blob blob = lobCreator.createBlob(content, contentLength);

        final FileEntity fileEntity = new FileEntity();
        fileEntity.setName(fileName);
        fileEntity.setCreator(user);
        fileEntity.setContent(blob);

        fileRepository.save(fileEntity);

        return fileEntity;
    }

    private void safeDelete(@Nullable final Path temp) {
        if (temp == null) return;
        try {
            Files.delete(temp);
        } catch (final IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void createAsset(@NotNull final String nameAsset, String description, @NotNull final UserEntity user) {
        AssetEntity assetEntity = new AssetEntity();
        assetEntity.setName(nameAsset);
        assetEntity.setDescription(description);
        assetEntity.setCreator(user);
        assetRepository.save(assetEntity);
    }

    @Override
    public void addFileToAsset(@NotNull final FileEntity file, @NotNull final AssetEntity asset) {
        if (file == null || asset == null) {
            throw new NoSuchElementException("No such file or asset");
        }
        List<FileEntity> files = asset.getFiles();
        files.add(file);
        asset.setFiles(files);
        assetRepository.save(asset);
    }

    @Override
    public boolean removeFileFromAsset(@NotNull final FileEntity file, @NotNull final AssetEntity asset) {
        if (file == null || asset == null) {
            throw new NoSuchElementException("No such file or asset");
        }
        List<FileEntity> files = asset.getFiles();
        if (!files.contains(file)) {
            return false;
        }
        files.remove(file);
        asset.setFiles(files);
        assetRepository.save(asset);
        return true;
    }
}
