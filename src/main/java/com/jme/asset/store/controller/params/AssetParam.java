package com.jme.asset.store.controller.params;

import org.jetbrains.annotations.Nullable;

/**
 * The request params of creating an asset.
 *
 * @author Alena Solonevich
 */
public class AssetParam {
    /**
     * The asset description
     */
    @Nullable
    private String description;
    /**
     * The asset name
     */
    @Nullable
    private String name;

    /**
     * The asset category id
     */
    private long categoryId;

    /**
     * Get the asset description
     *
     * @return the asset description
     */
    public @Nullable String getDescription() {
        return description;
    }

    /**
     * Set the asset description
     *
     * @param description the asset description
     */
    public void setDescription(@Nullable String description) {
        this.description = description;
    }

    /**
     * Get the asset name
     *
     * @return the asset name
     */
    public @Nullable String getName() {
        return name;
    }

    /**
     * Set the asset name
     *
     * @param name the asset name
     */
    public void setName(@Nullable String name) {
        this.name = name;
    }

    /**
     * Get the category id
     *
     * @return the category id
     */
    public long getCategoryId() {
        return categoryId;
    }

    /**
     * Set the category id
     *
     * @param categoryId the category id
     */
    public void setCategoryId(final long categoryId) {
        this.categoryId = categoryId;
    }
}
