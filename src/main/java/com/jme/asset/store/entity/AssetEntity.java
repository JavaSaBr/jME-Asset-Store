package com.jme.asset.store.entity;

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
     * @return the name of asset
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name of asset
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the description of asset
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description of asset
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return files in asset
     */
    public List<FileEntity> getFiles() {
        return files;
    }

    /**
     * @param files files in asset
     */
    public void setFiles(List<FileEntity> files) {
        this.files = files;
    }

    /**
     * @return the creator of asset
     */
    public UserEntity getCreator() {
        return creator;
    }

    /**
     * @param creator the creator of asset
     */
    public void setCreator(UserEntity creator) {
        this.creator = creator;
    }

    /**
     * Add file to files
     * @param file the file
     */
    public void addFile(FileEntity file){
        files.add(file);
    }

    /**
     * Remove file from files
     *
     * @param file the file
     */
    public void removeFile(FileEntity file){
        if(files.contains(file)){
            throw new RuntimeException("file don't exist");
        }
        files.remove(file);
    }
}
