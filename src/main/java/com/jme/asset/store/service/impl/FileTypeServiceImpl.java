package com.jme.asset.store.service.impl;

import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import com.jme.asset.store.db.repository.asset.FileTypeRepository;
import com.jme.asset.store.service.FileTypeService;
import com.ss.rlib.util.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Implementation of FileTypeService
 *
 * @author Gomanchuk Mikhail
 */
@Service
public class FileTypeServiceImpl implements FileTypeService {

    @NotNull
    private FileTypeRepository fileTypeRepository;

    @Autowired
    public FileTypeServiceImpl(@NotNull final FileTypeRepository fileTypeRepository) {
        this.fileTypeRepository = fileTypeRepository;
    }

    @Override
    public @NotNull FileTypeEntity createType(@NotNull final String name,
                                              @NotNull final String mimeType,
                                              @NotNull final String extension) {
        final FileTypeEntity type = createFileTypeEntity(name, mimeType, extension);
        fileTypeRepository.save(type);
        return type;
    }

    @Override
    public void deleteType(@NotNull final FileTypeEntity fileType) {
        fileTypeRepository.delete(fileType);
    }

    @Override
    public @Nullable FileTypeEntity loadType(final long id) {
        final Optional<FileTypeEntity> optional = fileTypeRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    @Override
    public @Nullable List<FileTypeEntity> loadAllTypes() {
        final List<FileTypeEntity> allFileTypes = new ArrayList<>();
        final Iterable<FileTypeEntity> allTypes = fileTypeRepository.findAll();
        for (final FileTypeEntity fileType : allTypes) {
            allFileTypes.add(fileType);
        }
        return allFileTypes;
    }

    @Override
    public @Nullable FileTypeEntity findType(@Nullable final String extension, @Nullable final String mimeType) {

        if (!StringUtils.isEmpty(extension) && !StringUtils.isEmpty(mimeType)) {
            return fileTypeRepository.findByExtensionAndMimeType(extension, mimeType).orElse(null);
        } else if (!StringUtils.isEmpty(extension)) {
            return fileTypeRepository.findByExtension(extension).orElse(null);
        }

        return fileTypeRepository.findByMimeType(mimeType).orElse(null);
    }

    /**
     * Create FileTypeEntity
     *
     * @param name      type's name
     * @param mimeType  MIME_type
     * @param extension extension
     * @return FileTypeEntity
     */
    private @NotNull FileTypeEntity createFileTypeEntity(@NotNull final String name,
                                                         @NotNull final String mimeType,
                                                         @NotNull final String extension) {
        final FileTypeEntity type = new FileTypeEntity();
        type.setName(name);
        type.setMimeType(mimeType);
        type.setExtension(extension);
        return type;
    }
}