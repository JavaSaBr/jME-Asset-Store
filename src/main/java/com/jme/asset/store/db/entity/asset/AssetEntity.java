package com.jme.asset.store.db.entity.asset;

import com.jme.asset.store.db.entity.BaseEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.persistence.*;
import java.util.ArrayList;
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
    private List<FileEntity> files = new ArrayList<>();

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
    public @NotNull String getName() {
        return name;
    }

    /**
     * Set the asset name
     *
     * @param name the name of asset
     */
    public void setName(@NotNull final String name) {
        this.name = name;
    }

    /**
     * Get the asset description
     *
     * @return the description of asset
     */
    public @Nullable String getDescription() {
        return description;
    }

    /**
     * Set the asset description
     *
     * @param description the description of asset
     */
    public void setDescription(@Nullable final String description) {
        this.description = description;
    }

    /**
     * Get the asset files
     *
     * @return files in asset
     */
    public @Nullable List<FileEntity> getFiles() {
        return files;
    }

    /**
     * Set the asset files
     *
     * @param files files in asset
     */
    public void setFiles(@Nullable final List<FileEntity> files) {
        this.files = files;
    }

    /**
     * Get the asset creator
     *
     * @return the creator of asset
     */
    public @NotNull UserEntity getCreator() {
        return creator;
    }

    /**
     * Set the asset creator
     *
     * @param creator the creator of asset
     */
    public void setCreator(@NotNull final UserEntity creator) {
        this.creator = creator;
    }

    /**
     * Get the asset category
     *
     * @return the category of asset
     */
    public @NotNull AssetCategoryEntity getCategory() {
        return category;
    }

    /**
     * Set the asset category
     *
     * @param category the category of asset
     */
    public void setCategory(@NotNull final AssetCategoryEntity category) {
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
