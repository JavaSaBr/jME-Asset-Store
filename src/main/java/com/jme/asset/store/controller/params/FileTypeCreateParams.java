package com.jme.asset.store.controller.params;

/**
 * The request params of creating file type
 *
 * @author Alena Solonevich
 */
public class FileTypeCreateParams {

    /**
     * The name of file type
     */
    private String name;

    /**
     * The mime-type of file-type
     */
    private String mimeType;

    /**
     * The extension of file type
     */
    private String extension;

    /**
     * Get the name of file type
     *
     * @return the name of file type
     */
    public String getName() {
        return name;
    }

    /**
     * Set the name of file type
     *
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the mime-type of file type
     *
     * @return the mime-type of file type
     */
    public String getMimeType() {
        return mimeType;
    }

    /**
     * Set the mime-type of file type
     *
     * @param mimeType of file type
     */
    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }

    /**
     * Get extension of file type
     *
     * @return the extension of file type
     */
    public String getExtension() {
        return extension;
    }

    /**
     * Set the extension of file type
     *
     * @param extension of file type
     */
    public void setExtension(String extension) {
        this.extension = extension;
    }
}