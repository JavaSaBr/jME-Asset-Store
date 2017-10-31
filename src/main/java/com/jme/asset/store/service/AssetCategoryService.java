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
     * Remove asset category by id
     *
     * @param id the category id
     */
    void removeCategory(long id);

    /**
     * Add child to children of asset category
     *
     * @param childId    the category child id
     * @param categoryId the category id
     */
    void addChild(long categoryId, long childId);

    /**
     * Remove child from children of asset category
     *
     * @param childId    the category children id
     * @param categoryId the category id
     */
    void removeChild(long categoryId, long childId);

    /**
     * Get all asset categories
     *
     * @return the list of asset categories
     */
    @Nullable List<AssetCategoryEntity> getAllCategories();

}
