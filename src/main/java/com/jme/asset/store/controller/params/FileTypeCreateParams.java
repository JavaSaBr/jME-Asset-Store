package com.jme.asset.store.controller.params;

import org.jetbrains.annotations.Nullable;

/**
 * The request params of creating file type
 *
 * @author Alena Solonevich
 */
public class FileTypeCreateParams {
    /**
     * The name of file type
     */
    @Nullable
    private String name;
    /**
     * The mime-type of file-type
     */
    @Nullable
    private String mimeType;
    /**
     * The extension of file type
     */
    @Nullable
    private String extension;

    /**
     * Get the name of file type
     *
     * @return the name of file type
     */
    public @Nullable String getName() {
        return name;
    }

    /**
     * Set the name of file type
     *
     * @param name
     */
    public void setName(@Nullable String name) {
        this.name = name;
    }

    /**
     * Get the mime-type of file type
     *
     * @return the mime-type of file type
     */
    public @Nullable String getMimeType() {
        return mimeType;
    }

    /**
     * Set the mime-type of file type
     *
     * @param mimeType of file type
     */
    public void setMimeType(@Nullable String mimeType) {
        this.mimeType = mimeType;
    }

    /**
     * Get extension of file type
     *
     * @return the extension of file type
     */
    public @Nullable String getExtension() {
        return extension;
    }

    /**
     * Set the extension of file type
     *
     * @param extension of file type
     */
    public void setExtension(@Nullable String extension) {
        this.extension = extension;
    }
}