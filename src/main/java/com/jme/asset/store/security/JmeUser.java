package com.jme.asset.store.security;

import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

/**
 * The jME user.
 *
 * @author Alex Brui
 */
public class JmeUser extends User {

    /**
     * The user entity from DB.
     */
    @NotNull
    private final UserEntity user;

    public JmeUser(@NotNull final String username, @NotNull final String password,
                   @NotNull final Collection<? extends GrantedAuthority> authorities, @NotNull final UserEntity user) {
        super(username, password, authorities);
        this.user = user;
    }

    /**
     * Gets the hashed password.
     *
     * @return the hashed password.
     */
    public @NotNull String getHashedPassword() {
        return user.getPassword();
    }

    /**
     * Gets the user entity.
     *
     * @return the user entity.
     */
    public @NotNull UserEntity getUser() {
        return user;
    }
}
