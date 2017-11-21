package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;

/**
 * Service for File's types
 *
 * @author Gomanchuk Mikhail
 */
public interface FileTypeService {

    /**
     * Create new File type
     *
     * @param name      name of type
     * @param mimeType  MIME-type
     * @param extension extension
     */
    @NotNull FileTypeEntity createType(@NotNull final String name,
                                       @NotNull final String mimeType,
                                       @NotNull final String extension);

    /**
     * Delete type by id
     *
     * @param fileType the file type.
     */
    void deleteType(@NotNull final FileTypeEntity fileType);

    /**
     * Load type by id
     *
     * @param id id of type
     */
    @Nullable FileTypeEntity loadType(final long id);

    /**
     * Load list of all file types
     *
     * @return list of all file types
     */
    @Nullable List<FileTypeEntity> loadAllTypes();

    /**
     * Try to find a file type for the extension and mime type.
     *
     * @param extension the extension.
     * @param mimeType the mime type.
     * @return the file type or null.
     */
    @Nullable FileTypeEntity findType(@Nullable String extension, @Nullable String mimeType);
}