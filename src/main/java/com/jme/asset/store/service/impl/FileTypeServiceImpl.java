package com.jme.asset.store.service.impl;

import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import com.jme.asset.store.db.repository.asset.FileTypeRepository;
import com.jme.asset.store.service.FileTypeService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Implementation of FileTypeService
 *
 * @author Gomanchuk Mikhail
 */
@Service
public class FileTypeServiceImpl implements FileTypeService {

    /**
     * Repository of types
     */
    @NotNull
    private FileTypeRepository fileTypeRepository;

    @Autowired
    public FileTypeServiceImpl(@NotNull FileTypeRepository fileTypeRepository) {
        this.fileTypeRepository = fileTypeRepository;
    }

    @Override
    public void createType(@NotNull String name, @NotNull String mimeType, @NotNull String extension) {
        FileTypeEntity type = createFileTypeEntity(name, mimeType, extension);
        fileTypeRepository.save(type);
    }

    @Override
    public void deleteType(long id) {
        fileTypeRepository.deleteById(id);
    }

    @Override
    @Nullable
    public FileTypeEntity loadType(long id) {
        Optional<FileTypeEntity> optional = fileTypeRepository.findById(id);
        return optional.isPresent() ? optional.get() : null;
    }

    /**
     * Create FileTypeEntity
     * @param name type's name
     * @param mimeType MIME_type
     * @param extension extension
     * @return FileTypeEntity
     */
    private FileTypeEntity createFileTypeEntity(@NotNull String name, @NotNull String mimeType,
                                                @NotNull String extension) {
        FileTypeEntity type = new FileTypeEntity();
        type.setName(name);
        type.setMimeType(mimeType);
        type.setExtension(extension);
        return type;
    }
}
