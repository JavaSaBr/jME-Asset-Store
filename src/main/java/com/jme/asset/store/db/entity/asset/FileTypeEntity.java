package com.jme.asset.store.db.entity.asset;

import com.jme.asset.store.db.entity.BaseEntity;
import org.jetbrains.annotations.NotNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * The file type entity
 *
 * @author Gomanchuk Mikhail
 */
@Entity
@Table(name = "FILE_TYPE", uniqueConstraints = @UniqueConstraint(columnNames = {
        "name",
        "mime_type",
        "extension"
}, name = "file_type_uniq_index"
)
)
public class FileTypeEntity extends BaseEntity {

    /**
     * Name of type
     */
    @Column(name = "name", nullable = false)
    private String name;

    /**
     * MIME-type
     */
    @Column(name = "mime_type", nullable = false)
    private String mimeType;

    /**
     * Extension
     */
    @Column(name = "extension", nullable = false)
    private String extension;

    /**
     * Get type's name
     *
     * @return type's name
     */
    public @NotNull String getName() {
        return name;
    }

    /**
     * Set type's name
     *
     * @param name type's name
     */
    public void setName(@NotNull final String name) {
        this.name = name;
    }

    /**
     * Get MIME-type of file
     *
     * @return MIME-type of file
     */
    public @NotNull String getMimeType() {
        return mimeType;
    }

    /**
     * Set MIME-type of file
     *
     * @param mimeType MIME-type of file
     */
    public void setMimeType(@NotNull final String mimeType) {
        this.mimeType = mimeType;
    }

    /**
     * Get Extension of file
     *
     * @return extension
     */
    public @NotNull String getExtension() {
        return extension;
    }

    /**
     * Set extension of file
     *
     * @param extension extension
     */
    public void setExtension(@NotNull final String extension) {
        this.extension = extension;
    }
}
