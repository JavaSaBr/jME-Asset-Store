package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;

/**
 * The service to work with asset category.
 *
 * @author Yunkevich Andrei
 */
public interface AssetCategoryService {

    /**
     * Create category
     *
     * @param name        the category name
     * @param description the category description
     * @param parentId    the category parent
     */
    void addCategory(@NotNull String name, @Nullable String description, @Nullable Long parentId);

    /**
     * Find asset category by id
     *
     * @param id the category id
     * @return the asset category
     */
    @Nullable AssetCategoryEntity load(long id);

    /**
     * Remove asset category
     *
     * @param category the category of asset
     */
    void removeCategory(@NotNull AssetCategoryEntity category);

    /**
     * Add child to children of asset category
     *
     * @param category      the asset category
     * @param childCategory the child of asset category
     */
    void addChild(@NotNull AssetCategoryEntity category, @NotNull AssetCategoryEntity childCategory);

    /**
     * Remove child from children of asset category
     *
     * @param category      the asset category
     * @param childCategory the child of asset category
     */
    void removeChild(@NotNull AssetCategoryEntity category, @NotNull AssetCategoryEntity childCategory);

    /**
     * Get all asset categories
     *
     * @return the list of asset categories
     */
    @Nullable List<AssetCategoryEntity> getAllCategories();

    List<AssetCategoryEntity> getAllChildrenByParrentId(@NotNull Long id);

}
