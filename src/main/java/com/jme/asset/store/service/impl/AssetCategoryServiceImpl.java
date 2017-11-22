package com.jme.asset.store.service.impl;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.repository.asset.AssetCategoryRepository;
import com.jme.asset.store.service.AssetCategoryService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Service;

import java.util.*;

import static java.util.Collections.emptyList;

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
                            @Nullable final AssetCategoryEntity parent) {
        final AssetCategoryEntity category = new AssetCategoryEntity();
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
    public void removeCategory(@NotNull final AssetCategoryEntity category) {

        final Set<AssetCategoryEntity> children = category.getChildren();

        if (children != null) {
            for (final AssetCategoryEntity child : children) {
                child.setParent(null);
                assetCategoryRepository.delete(child);
            }
        }

        category.setParent(null);
        assetCategoryRepository.delete(category);
    }

    @Override
    public void addChild(@NotNull final AssetCategoryEntity category, @NotNull final AssetCategoryEntity child) {

        child.setParent(category);
        assetCategoryRepository.save(child);

        final Set<AssetCategoryEntity> children = category.getChildren();
        if (children != null) {
            children.add(child);
        } else {
            final Set<AssetCategoryEntity> newChildren = new HashSet<>();
            newChildren.add(child);
            category.setChildren(newChildren);
        }
    }

    @Override
    public void removeChild(@NotNull final AssetCategoryEntity category,
                            @NotNull final AssetCategoryEntity child) {

        final Set<AssetCategoryEntity> children = category.getChildren();

        if (children == null || !children.contains(child)) {
            throw new NoSuchElementException("Child don't exist in category");
        }

        removeCategory(child);

        children.remove(child);
    }

    @Override
    public @NotNull List<AssetCategoryEntity> getCategories() {
        final List<AssetCategoryEntity> result = assetCategoryRepository.findAllByParentIsNull();
        return result == null ? emptyList() : result;
    }

    @Override
    public @NotNull List<AssetCategoryEntity> getChildren(@NotNull final AssetCategoryEntity parent) {
        return assetCategoryRepository.findAllByParent(parent);
    }

    @Override
    public @NotNull List<AssetCategoryEntity> getCategoryWithChildren(@NotNull final AssetCategoryEntity category) {
        final List<AssetCategoryEntity> categories = new ArrayList<>();
        final Queue<AssetCategoryEntity> queue = new LinkedList<>();

        categories.add(category);
        queue.add(category);

        do {
            for (AssetCategoryEntity categoryEntity : queue.remove().getChildren()) {
                queue.add(categoryEntity);
                categories.add(categoryEntity);
            }
        } while (!queue.isEmpty());

        return categories;
    }

}
