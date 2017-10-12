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

    public List<RolesEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RolesEntity> roles) {
        this.roles = roles;
    }

    public boolean addRole(RolesEntity rolesEntity){
        if(!roles.contains(rolesEntity)) {
            roles.add(rolesEntity);
            return true;
        }
        return false;
    }

    public boolean delRole(RolesEntity rolesEntity){
        return roles.remove(rolesEntity);
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
                "name = " + getName() + "\n" +
                '}';
    }
}
