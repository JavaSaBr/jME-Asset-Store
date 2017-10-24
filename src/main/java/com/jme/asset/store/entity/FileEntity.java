package com.jme.asset.store.entity;

import javax.persistence.*;
import java.sql.Blob;

/**
 * The File entity
 *
 * @author Gomanchuk Mikhail
 */
@Entity
@Table(name = "FILE_ENTITY")
public class FileEntity extends BaseEntity {

    /**
     * The file name
     */
    @Column(name = "name", nullable = false)
    private String name;

    /**
     * The file content
     */
    @Column(name = "content", nullable = false)
    private Blob content;

    /**
     * The creator of file
     */
    @OneToOne
    @JoinColumn(name = "creator_id")
    private UserEntity creator;

    /**
     * Get the file name
     *
     * @return the file name
     */
    public String getName() {
        return name;
    }

    /**
     * Set the file name
     *
     * @param name the file name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Get the file content
     *
     * @return the content of file
     */
    public Blob getContent() {
        return content;
    }

    /**
     * Set the file content
     *
     * @param content the content of file
     */
    public void setContent(Blob content) {
        this.content = content;
    }

    /**
     * Get the file creator
     *
     * @return the file creator
     */
    public UserEntity getCreator() {
        return creator;
    }

    /**
     * Set the file creator
     *
     * @param creator the file creator
     */
    public void setCreator(UserEntity creator) {
        this.creator = creator;
    }
}
