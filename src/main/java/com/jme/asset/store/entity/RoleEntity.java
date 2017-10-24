package com.jme.asset.store.entity;

import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;

/**
 * The role entity.
 *
 * @author Denis Lesheniuk
 */
@Entity
@Table(name = "ROLE_ENTITY",
        indexes = {
                @Index(columnList = "name", name = "role_name_index")
        })
public class RoleEntity extends BaseEntity implements GrantedAuthority {

    /**
     * The role name.
     */
    @Column(name = "name", length = 50, nullable = false, unique = true)
    private String name;

    @Override
    public String getAuthority() {
        return name;
    }

    /**
     * Get the role name
     *
     * @return the role name.
     */
    public String getName() {
        return name;
    }

    /**
     * Set the role name
     *
     * @param name the role name.
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
