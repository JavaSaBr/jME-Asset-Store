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
    @Nullable AssetCategoryEntity load(@NotNull long id);

    /**
     * Remove asset category by id
     *
     * @param id the category id
     */
    void removeCategory(@NotNull long id);

    /**
     * The set children to children of asset category
     *
     * @param childrenId the category children id
     * @param categoryId the category id
     */
    void setChildren(@NotNull long childrenId, @NotNull long categoryId);

    /**
     * Remove children from children of asset category
     *
     * @param childrenId the category children id
     * @param categoryId the category id
     */
    void removeChildren(@NotNull long childrenId, @NotNull long categoryId);

    /**
     * Get all asset categories
     *
     * @return the list of asset categories
     */
    @Nullable List<AssetCategoryEntity> getAllCategories();

}
