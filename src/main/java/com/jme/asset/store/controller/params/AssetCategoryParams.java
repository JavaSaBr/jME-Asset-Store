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
    @Nullable
    private String id;

    /**
     * The asset category name;
     */
    @NotNull
    private String name;

    /**
     * The asset category description.
     */
    @Nullable
    private String description;

    /**
     * Get the asset category id.
     *
     * @return the asset category id.
     */
    public String getId() {
        return id;
    }

    /**
     * Set the asset category id
     *
     * @param id the asset category id.
     */
    public void setId(@Nullable final String id) {
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
    public void setName(@NotNull final String name) {
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
    public void setDescription(@Nullable final String description) {
        this.description = description;
    }
}
