package com.jme.asset.store.database.entity.user;


import com.jme.asset.store.database.entity.BaseEntity;
import com.jme.asset.store.database.entity.role.RoleEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
public class UserEntity extends BaseEntity {

    @ManyToMany(fetch = FetchType.EAGER) //cascade = CascadeType.ALL
    private List<RoleEntity> roles;

    @Column(name = "name", unique = true, nullable = true)
    private String name;

    @Column(name = "password", nullable = true)
    private String password;

    public UserEntity(String name, String password) {
        this.name = name;
        this.password = password;
    }
    public UserEntity(String name, String password, List<RoleEntity> roles) {
        this.name = name;
        this.password = password;
        this.roles = roles;
    }
    public UserEntity() {
    }

    public UserEntity(Long id, String name, String password) {
        super(id);
        this.name = name;
        this.password = password;
    }

    public String getUser_name() {
        return name;
    }

    public void setUser_name(String name) {
        this.name = name;
    }

    public String getUser_password() {
        return password;
    }

    public void setUser_password(String password) {
        this.password = password;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }
}

