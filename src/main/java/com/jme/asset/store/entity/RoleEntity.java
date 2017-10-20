package com.jme.asset.store.entity;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;

/**
 * The Role entity.
 *
 * @author Denis Lesheniuk
 */
@Entity
@Table(name="ROLE_ENTITY",
        indexes = {
        @Index(columnList = "name", name = "role_name_index")
        })
public class RoleEntity extends BaseEntity implements GrantedAuthority {

    /**
     * The Role name.
     */
    @Column(name = "name", length = 50, nullable = false, unique = true)
    private String name;

    @Override
    public String getAuthority() {
        return name;
    }

    public RoleEntity(){}

    /**
     * @return the Role name.
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the Role name.
     */
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "RoleEntity{" +
                "name='" + name + '\'' +
                '}';
    }
}
