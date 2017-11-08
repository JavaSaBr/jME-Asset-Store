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
     * Get all asset categories
     *
     * @return the list of asset categories
     */
    @Nullable List<AssetCategoryEntity> getAllCategories();

    List<AssetCategoryEntity> getAllChildrenByParrentId(@NotNull Long id);

}
