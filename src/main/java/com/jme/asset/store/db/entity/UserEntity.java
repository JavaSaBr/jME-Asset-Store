package com.jme.asset.store.db.entity;

//import com.jme.asset.store.db.entity.RoleEntity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_name"})})
public class UserEntity extends BaseEntity {

    @Column(name = "user_name", nullable = false, unique = true)
    private String name;
    @Column(name = "user_password", nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles;

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }

    public String getName() {
        return name;
    }

    public UserEntity() {

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

    public void setName(String name) {
        this.name = name;

    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean addRole(RoleEntity roleEntity) {
        if (!roles.contains(roleEntity)) {
            roles.add(roleEntity);
            return true;
        }
        return false;
    }

    public boolean removeRole(RoleEntity roleEntity) {
        return roles.remove(roleEntity);
    }
}
