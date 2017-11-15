package com.jme.asset.store.db.entity.asset;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.jme.asset.store.db.entity.BaseEntity;

import org.jetbrains.annotations.Nullable;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * The asset category entity
 *
 * @author Yunkevich Andrei
 */
@Entity
@Table(name = "ASSET_CATEGORY_ENTITY")
public class AssetCategoryEntity extends BaseEntity {

    /**
     * The name of asset category
     */
    @Column(name = "name")
    private String name;

    /**
     * The description of asset category
     */
    @Column(name = "description")
    private String description;

    /**
     * The parent of asset category
     */
    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "parent_id")
    @JsonBackReference
    private AssetCategoryEntity parent;

    /**
     * The children of asset category
     */
    @OneToMany(mappedBy = "parent")
    @JsonManagedReference
    private Set<AssetCategoryEntity> children = new HashSet<AssetCategoryEntity>();

    public AssetCategoryEntity() {
    }

    /**
     * Get the category name
     *
     * @return the name of asset category
     */
    public @Nullable String getName() {
        return name;
    }

    /**
     * Set the category name
     *
     * @param name the name of asset category
     */
    public void setName(@Nullable final String name) {
        this.name = name;
    }

    /**
     * Get the description of category
     *
     * @return the description of asset category
     */
    public @Nullable String getDescription() {
        return description;
    }

    /**
     * Set the category description
     *
     * @param description the description of asset category
     */
    public void setDescription(@Nullable final String description) {
        this.description = description;
    }

    /**
     * Get the parent of asset category
     *
     * @return the parent of asset category
     */
    public @Nullable AssetCategoryEntity getParent() {
        return parent;
    }

    /**
     * Set the category parent
     *
     * @param parent the parent of asset category
     */
    public void setParent(@Nullable final AssetCategoryEntity parent) {
        this.parent = parent;
    }

    /**
     * Get the children of asset category
     *
     * @return the children of asset category
     */
    public @Nullable Set<AssetCategoryEntity> getChildren() {
        return children;
    }

    /**
     * Set the category children
     *
     * @param children the children of asset category
     */
    public void setChildren(@Nullable final Set<AssetCategoryEntity> children) {
        this.children = children;
    }
}
