package com.jme.asset.store.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "role")
public class RolesEntity extends BaseEntity {

    @Column(name = "name", nullable = false, unique = true)
    private String name;

    public RolesEntity() {
    }

    public RolesEntity(final String name) {
        this.name = name;
    }

    public RolesEntity(final Long id, final String name) {
        super(id);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String role_name) {
        this.name = role_name;
    }

    @Override
    public String toString() {
        return "{\n" +
                "id = '" + getId() + '\'' + "\n" +
                "name = " + getName() + "\n" +
                '}';
    }
}
