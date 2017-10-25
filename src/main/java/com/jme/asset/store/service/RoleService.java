package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.user.RoleEntity;
import org.jetbrains.annotations.NotNull;

/**
 * The service to work with user roles.
 *
 * @author Alena Solonevich
 */
public interface RoleService {

    String USER_ROLE = "USER";
    String ADMIN_ROLE = "ADMIN";
    String ARTIST_ROLE = "ARTIST";

    /**
     * Gets or creates a role by the name.
     *
     * @param name the role name.
     * @return the role.
     */
    @NotNull RoleEntity getOrCreateRole(@NotNull final String name);
}
