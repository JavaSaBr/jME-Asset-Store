package com.jme.asset.store.service.impl;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.repository.asset.AssetCategoryRepository;
import com.jme.asset.store.service.AssetCategoryService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

/**
 * The implementation of the asset category.
 *
 * @author Yunkevich Andrei
 */
@Service
public class AssetCategoryServiceImpl implements AssetCategoryService {

    /**
     * The asset category repository.
     */
    @NotNull
    private final AssetCategoryRepository assetCategoryRepository;

    /**
     * The asset category service.
     */
   /* @NotNull
    private final AssetCategoryService assetCategoryService;*/
    @Autowired
    public AssetCategoryServiceImpl(@NotNull final AssetCategoryRepository assetCategoryRepository/*,
                                    @NotNull AssetCategoryService assetCategoryService*/) {
        this.assetCategoryRepository = assetCategoryRepository;
        //this.assetCategoryService = assetCategoryService;
    }

    @Override
    public void addCategory(@NotNull final String name, @Nullable final String description,
                            @Nullable final AssetCategoryEntity parent) {
        final AssetCategoryEntity category = null;
        category.setName(name);
        category.setDescription(description);
        //category.setParent(parent);
        assetCategoryRepository.save(category);
    }

    @Override
    public @Nullable AssetCategoryEntity load(@NotNull final long id) {
        final Optional<AssetCategoryEntity> categoryEntity = assetCategoryRepository.findById(id);
        return categoryEntity.orElse(null);
    }

    @Override
    public void removeCategory(@NotNull final long id) {
        assetCategoryRepository.deleteById(id);
    }

    @Override
    public void setChildren(@NotNull final long childrenId, @NotNull final long categoryId) {
        final Optional<AssetCategoryEntity> category = assetCategoryRepository.findById(categoryId);
        final Optional<AssetCategoryEntity> children = assetCategoryRepository.findById(childrenId);
        final AssetCategoryEntity categoryEntity = category.get();
        final AssetCategoryEntity childrenEntity = children.get();
        if (categoryEntity == null && childrenEntity == null) {
            throw new NoSuchElementException("no such category");
        }
        categoryEntity.addChildren(childrenEntity);
    }

    @Override
    public void removeChildren(@NotNull final long childrenId, @NotNull final long categoryId) {
        final Optional<AssetCategoryEntity> category = assetCategoryRepository.findById(categoryId);
        final Optional<AssetCategoryEntity> children = assetCategoryRepository.findById(childrenId);
        final AssetCategoryEntity categoryEntity = category.get();
        final AssetCategoryEntity childrenEntity = children.get();
        if (categoryEntity == null && childrenEntity == null) {
            throw new NoSuchElementException("no such category");
        }
        categoryEntity.removeChildren(childrenEntity);
    }

    @Override
    public @Nullable List<AssetCategoryEntity> getAllCategories() {
        return assetCategoryRepository.findAllByParentIsNull();
    }

}
