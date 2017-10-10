package com.jme.asset.store.entity;

import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name = "user")
public class UserEntity extends BaseEntity {
    @Column(name = "user_name", nullable = false, unique = true)
    private String name;

    @Column(name = "user_password", nullable = false)
    private String password;

    public UserEntity(){

    }
    public UserEntity(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public UserEntity(Long id, String name, String password) {
        super(id);
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "{\n" +
                "id = '" + getId() + '\'' + "\n" +
                "name = " + getId() + "\n" +
                '}';
    }
}
