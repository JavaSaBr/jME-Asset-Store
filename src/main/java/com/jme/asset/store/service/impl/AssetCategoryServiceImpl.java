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

    @Autowired
    public AssetCategoryServiceImpl(@NotNull final AssetCategoryRepository assetCategoryRepository) {
        this.assetCategoryRepository = assetCategoryRepository;
    }

    @Override
    public void addCategory(@NotNull final String name, @Nullable final String description,
                            @Nullable final Long parentId) {
        final AssetCategoryEntity category = new AssetCategoryEntity();
        final AssetCategoryEntity parent;

        final Optional<AssetCategoryEntity> parentOpt = assetCategoryRepository.findById(parentId);
        if (parentOpt.isPresent()) {
            parent = parentOpt.get();
        } else {
            parent = null;
        }
        category.setName(name);
        category.setDescription(description);
        category.setParent(parent);
        assetCategoryRepository.save(category);
    }

    @Override
    public @Nullable AssetCategoryEntity load(final long id) {
        final Optional<AssetCategoryEntity> categoryEntity = assetCategoryRepository.findById(id);
        return categoryEntity.orElse(null);
    }

    @Override
    public void removeCategory(final long id) {
        final Optional<AssetCategoryEntity> categoryEntityOptional = assetCategoryRepository.findById(id);
        final AssetCategoryEntity categoryEntity = categoryEntityOptional.get();

        for (AssetCategoryEntity category : categoryEntity.getChildren()) {
            category.setParent(null);
            assetCategoryRepository.delete(category);
        }

        categoryEntity.setParent(null);
        assetCategoryRepository.delete(categoryEntity);
    }

    @Override
    public void addChild(final long categoryId, final long childId) {
        final Optional<AssetCategoryEntity> category = assetCategoryRepository.findById(categoryId);
        final Optional<AssetCategoryEntity> child = assetCategoryRepository.findById(childId);
        final AssetCategoryEntity categoryEntity = category.get();
        final AssetCategoryEntity childEntity = child.get();
        if (categoryEntity == null || childEntity == null) {
            throw new NoSuchElementException("no such category");
        }
        childEntity.setParent(categoryEntity);
        assetCategoryRepository.save(childEntity);
    }

    @Override
    public @Nullable List<AssetCategoryEntity> getAllCategories() {
        return assetCategoryRepository.findAllByParentIsNull();
    }

}
