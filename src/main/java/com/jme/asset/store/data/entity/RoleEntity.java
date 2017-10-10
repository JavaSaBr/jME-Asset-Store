package com.jme.asset.store.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;

/**
 * The User entity.
 *
 * @author Denis Lesheniuk
 */
@Entity
@Table(name="role")
public class RoleEntity extends BaseEntity {

    @Column(name="name")
    private String name;

    public RoleEntity() {
    }

    public RoleEntity(String name) {
        this.name = name;
    }

    public RoleEntity(Long id, String name) {
        super(id);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;

        RoleEntity that = (RoleEntity) o;

        return name != null ? name.equals(that.name) : that.name == null;
    }

    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "RoleEntity{" +
                "name='" + name + '\'' +
                '}';
    }
}
