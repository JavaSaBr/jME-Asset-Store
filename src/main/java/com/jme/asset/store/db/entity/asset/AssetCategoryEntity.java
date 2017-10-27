package com.jme.asset.store.db.entity.asset;

import com.jme.asset.store.db.entity.BaseEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.List;

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
    @Transient
    @Column(name = "parent")
    private AssetCategoryEntity parent;

    /**
     * The children of asset category
     */
    @Transient
    @Column(name = "children")
    private List<AssetCategoryEntity> children;

    public AssetCategoryEntity() {
    }

    public AssetCategoryEntity(final long id, @Nullable final String name, @Nullable final String description,
                               @Nullable final AssetCategoryEntity parent, @Nullable final List<AssetCategoryEntity> children) {
        super(id);
        this.name = name;
        this.description = description;
        this.parent = parent;
        this.children = children;
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
    public @Nullable List<AssetCategoryEntity> getChildren() {
        return children;
    }

    /**
     * Set the category children
     *
     * @param children the children of asset category
     */
    public void setChildren(@Nullable final List<AssetCategoryEntity> children) {
        this.children = children;
    }

    /**
     * Add children to children of asset category
     *
     * @param children the children of asset category
     */
    public void addChildren(AssetCategoryEntity children) {
        if (children != null)
            this.children.add(children);
    }

    /**
     * Remove children from list children of asset category
     *
     * @param children the children of aseet category
     */
    public void removeChildren(AssetCategoryEntity children) {
        if (this.children.contains(children))
            this.children.remove(children);
    }
}
