package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;

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
     * @param children    the category children
     */
    void addCategory(String name, String description, AssetCategoryEntity parent,
                     List<AssetCategoryEntity> children);

    /**
     * Find asset category by id
     *
     * @param id the category id
     * @return the asset category
     */
    AssetCategoryEntity findById(Long id);

    /**
     * Remove asset category by id
     *
     * @param id the category id
     */
    void removeById(Long id);

    /**
     * Get all asset categories
     *
     * @return the list of asset categories
     */
    List<AssetCategoryEntity> getAllCategories();

}
