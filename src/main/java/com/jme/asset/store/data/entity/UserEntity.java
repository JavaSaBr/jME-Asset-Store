package com.jme.asset.store.data.entity;

import org.springframework.context.annotation.Bean;

import javax.persistence.*;
import java.util.List;

/**
 * The User entity.
 *
 * @author Denis Lesheniuk
 */
@Entity
@Table(name = "user")
public class UserEntity extends BaseEntity {
    @Column(name = "name")
    private String name;


    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles;


    @Column(name = "password")
    private String password;

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

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
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
        return "UserEntity{" +
                "name='" + name + '\'' +
                ", roles=" + roles +
                ", password='" + password + '\'' +
                '}';
    }
}
