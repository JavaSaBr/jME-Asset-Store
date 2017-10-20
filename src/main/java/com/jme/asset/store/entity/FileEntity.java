package com.jme.asset.store.entity;

import javax.persistence.*;
import java.sql.Blob;

/**
 * The File entity.
 *
 * @author Denis Lesheniuk
 */
@Entity()
@Table(name="FILE_ENTITY")
public class FileEntity extends BaseEntity {

    /**
     * The file name.
     */
    @Column(name = "name", length = 50, nullable = false)
    private String name;

    /**
     * The file content.
     */
    @Column(name="file_content", nullable = false)
    @Lob
    private Blob fileContent;

    /**
     * The file owner.
     */
    @OneToOne
    @JoinColumn(name="user_id")
    private UserEntity owner;

    public FileEntity(){
    }

    public FileEntity(String name, Blob fileContent, UserEntity owner) {
        this.name = name;
        this.fileContent = fileContent;
        this.owner = owner;
    }

    /**
     * @return the File name.
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the File name.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the File content.
     */
    public Blob getFileContent() {
        return fileContent;
    }

    /**
     * @param fileContent the FIle content.
     */
    public void setFileContent(Blob fileContent) {
        this.fileContent = fileContent;
    }

    /**
     * @return the File owner.
     */
    public UserEntity getOwner() {
        return owner;
    }

    /**
     * @param owner the File owner.
     */
    public void setOwner(UserEntity owner) {
        this.owner = owner;
    }
}
