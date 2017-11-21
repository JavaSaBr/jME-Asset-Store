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
     * @param parent      the category parent
     */
    void addCategory(@NotNull String name, @Nullable String description, @Nullable AssetCategoryEntity parent);

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
     * Get asset categories
     *
     * @return the list of asset categories
     */
    @NotNull List<AssetCategoryEntity> getCategories();

    /**
     * Get children.
     *
     * @param parent the parent category.
     * @return the children.
     */
    @NotNull List<AssetCategoryEntity> getChildren(@NotNull AssetCategoryEntity parent);

    /**
     * Get category and all children by category id
     *
     * @param categoryId category id
     * @return list category
     */
    @NotNull List<AssetCategoryEntity> getCategoryAndAllChildren(@NotNull AssetCategoryEntity categoryId);

}
