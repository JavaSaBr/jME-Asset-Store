package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

/**
 * The repository to work with file type entities
 *
 * @author Gomanchuk Mikhail
 */
public interface FileTypeRepository extends PagingAndSortingRepository<FileTypeEntity, Long> {

    @NotNull Optional<FileTypeEntity> findByExtension(@NotNull String extension);
    @NotNull Optional<FileTypeEntity> findByExtensionAndMimeType(@NotNull String extension, @NotNull String mimeType);
    @NotNull Optional<FileTypeEntity> findByMimeType(@NotNull String mimeType);
}
