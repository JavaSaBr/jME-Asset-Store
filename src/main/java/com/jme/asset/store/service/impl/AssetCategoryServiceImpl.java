package com.jme.asset.store.service.impl;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.repository.asset.AssetCategoryRepository;
import com.jme.asset.store.service.AssetCategoryService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssetCategoryServiceImpl implements AssetCategoryService {
    @NotNull
    private final AssetCategoryRepository assetCategoryRepository;

    @Autowired
    public AssetCategoryServiceImpl(@NotNull final AssetCategoryRepository assetCategoryRepository) {
        this.assetCategoryRepository = assetCategoryRepository;
    }

    @Override
    public void addCategory(@NotNull final java.lang.String name, @Nullable final java.lang.String description,
                            @Nullable final AssetCategoryEntity parent, @Nullable final List<AssetCategoryEntity> children) {
        AssetCategoryEntity category = null;
        category.setName(name);
        category.setDescription(description);
        category.setParent(parent);
        category.setChildren(children);
        assetCategoryRepository.save(category);
    }

    @Override
    public AssetCategoryEntity findById(@NotNull final Long id) {
        Optional<AssetCategoryEntity> categoryEntity = assetCategoryRepository.findById(id);
        return categoryEntity.orElse(null);
    }

    @Override
    public void removeById(@NotNull final Long id) {
        assetCategoryRepository.deleteById(id);
    }

    @Override
    public List<AssetCategoryEntity> getAllCategories() {
        return (List<AssetCategoryEntity>) assetCategoryRepository.findAll();
    }

}
