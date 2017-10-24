package com.jme.asset.store.controller.params;

import org.jetbrains.annotations.NotNull;
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
    @NotNull
    private String name;

    /**
     * @return the aseet description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the asset description
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the asset name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the asset name
     */
    public void setName(String name) {
        this.name = name;
    }
}
