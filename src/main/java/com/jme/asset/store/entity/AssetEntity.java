package com.jme.asset.store.entity;

import javax.persistence.*;
import java.util.List;

/**
 * The Asset entity.
 *
 * @author Denis Lesheniuk
 */
@Entity
@Table(name="ASSET_ENTITY")
public class AssetEntity extends BaseEntity {

    /**
     *The Asset name.
     */
    @Column(name = "name", length = 50, nullable = false)
    private String name;

    /**
     * The Asset description.
     */
    @Column(name = "description", length = 1000, nullable = false)
    private String description;

    /**
     * The Asset owner.
     */
    @OneToOne
    @JoinColumn(name = "user_id")
    private UserEntity owner;

    /**
     * The Asset files.
     */
    @ManyToMany
    private List<FileEntity> files;

    public AssetEntity(){
    }

    /**
     * @return the Asset name.
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the Asset name.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the Asset description.
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the Asset description.
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the Asset owner.
     */
    public UserEntity getOwner() {
        return owner;
    }

    /**
     * @param owner the Asset owner.
     */
    public void setOwner(UserEntity owner) {
        this.owner = owner;
    }

    /**
     * @return the Asset files.
     */
    public List<FileEntity> getFiles() {
        return files;
    }

    /**
     * @param files the Asset files.
     */
    public void setFiles(List<FileEntity> files) {
        this.files = files;
    }
}
