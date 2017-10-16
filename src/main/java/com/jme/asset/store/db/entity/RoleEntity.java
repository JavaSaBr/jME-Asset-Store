package com.jme.asset.store.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class RoleEntity extends BaseEntity {
    @Column(name = "user_role", nullable = false)
    private String role;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public RoleEntity(String role) {
        this.role = role;
    }

    public RoleEntity(Long id, String role) {
        super(id);
        this.role = role;
    }

    public RoleEntity() {

    }
}
