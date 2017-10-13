package com.jme.asset.store.entity;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "user")
public class UserEntity extends BaseEntity {

    @Column(name = "user_name", nullable = false, unique = true)
    private String name;

    @Column(name = "user_password", nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<RolesEntity> roles;

    public UserEntity() {
    }

    public UserEntity(final String name, final String password) {
        this.name = name;
        this.password = password;
    }

    public UserEntity(final Long id, final String name, final String password) {
        super(id);
        this.name = name;
        this.password = password;
    }

    public List<RolesEntity> getRoles() {
        return roles;
    }

    public void setRoles(final List<RolesEntity> roles) {
        this.roles = roles;
    }

    public boolean addRole(final RolesEntity rolesEntity) {
        if (roles.contains(rolesEntity)) return false;
        roles.add(rolesEntity);
        return true;
    }

    public boolean delete(final RolesEntity rolesEntity) {
        return roles.remove(rolesEntity);
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
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
                "name = " + getName() + "\n" +
                '}';
    }
}
