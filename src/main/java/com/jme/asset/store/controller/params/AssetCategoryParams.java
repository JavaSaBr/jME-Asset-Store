package com.jme.asset.store.controller.params;


import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

/**
 * The asset category params.
 *
 * @author Denis Lesheniuk.
 */
public class AssetCategoryParams {

    /**
     * The asset category id;
     */
    private long id;

    /**
     * The asset category name;
     */
    private String name;

    /**
     * The asset category description.
     */
    private String description;

    /**
     * Get the asset category id.
     *
     * @return the asset category id.
     */
    public long getId() {
        return id;
    }

    /**
     * Set the asset category id
     *
     * @param id the asset category id.
     */
    public void setId(final long id) {
        this.id = id;
    }

    /**
     * Get the asset category name.
     *
     * @return the asset category name.
     */
    public String getName() {
        return name;
    }

    /**
     * Set the asset category name.
     *
     * @param name the asset category name.
     */
    public void setName(final String name) {
        this.name = name;
    }

    /**
     * Get the asset category description.
     *
     * @return the asset category description.
     */
    public String getDescription() {
        return description;
    }

    /**
     * Set the asset category description.
     *
     * @param description the asset category description.
     */
    public void setDescription(final String description) {
        this.description = description;
    }
}
