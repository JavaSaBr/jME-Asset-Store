package com.jme.asset.store.db.entity.asset;

import com.jme.asset.store.db.entity.BaseEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.persistence.*;
import java.util.List;

/**
 * The Asset entity
 *
 * @author Gomanchuk Mikhail
 */
@Entity
@Table(name = "ASSET_ENTITY")
public class AssetEntity extends BaseEntity {

    /**
     * The name of asset
     */
    @Column(name = "name", nullable = false)
    private String name;

    /**
     * The description of asset
     */
    @Column(name = "description", nullable = false)
    private String description;

    /**
     * Files in asset
     */
    @ManyToMany
    private List<FileEntity> files;

    /**
     * The creator of asset
     */
    @OneToOne
    @JoinColumn(name = "creator_id")
    private UserEntity creator;

    /**
     * The category of asset
     */
    @OneToOne
    private AssetCategoryEntity category;

    public AssetEntity() {
    }

    public AssetEntity(final long id, @NotNull final String name, @NotNull final String description,
                       @Nullable final List<FileEntity> files, @NotNull final UserEntity creator,
                       @NotNull final AssetCategoryEntity category) {
        super(id);
        this.name = name;
        this.description = description;
        this.files = files;
        this.creator = creator;
        this.category = category;
    }

    /**
     * Get the asset name
     *
     * @return the name of asset
     */
    public String getName() {
        return name;
    }

    /**
     * Set the asset name
     *
     * @param name the name of asset
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the asset description
     *
     * @return the description of asset
     */
    public String getDescription() {
        return description;
    }

    /**
     * Set the asset description
     *
     * @param description the description of asset
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Get the asset files
     *
     * @return files in asset
     */
    public List<FileEntity> getFiles() {
        return files;
    }

    /**
     * Set the asset files
     *
     * @param files files in asset
     */
    public void setFiles(List<FileEntity> files) {
        this.files = files;
    }

    /**
     * Get the asset creator
     *
     * @return the creator of asset
     */
    public UserEntity getCreator() {
        return creator;
    }

    /**
     * Set the asset creator
     *
     * @param creator the creator of asset
     */
    public void setCreator(UserEntity creator) {
        this.creator = creator;
    }

    /**
     * Get the asset category
     *
     * @return the category of asset
     */
    public AssetCategoryEntity getCategory() {
        return category;
    }

    /**
     * Set the asset category
     *
     * @param category the category of asset
     */
    public void setCategory(AssetCategoryEntity category) {
        this.category = category;
    }

    /**
     * Add file to the asset
     *
     * @param file the file
     */
    public void addFile(final FileEntity file) {
        if (files.contains(file)) {
            throw new RuntimeException("file is already exists");
        }
        files.add(file);
    }

    /**
     * Remove file from the asset
     *
     * @param file the file
     */
    public void removeFile(final FileEntity file) {
        if (files.contains(file)) {
            throw new RuntimeException("file doesn't exist");
        }
        files.remove(file);
    }
}
