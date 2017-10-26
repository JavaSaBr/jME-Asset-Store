package com.jme.asset.store.controller.params;

import org.jetbrains.annotations.Nullable;

/**
 * The user credentials parameters.
 *
 * @author Alex Brui
 */
public class UserCredentialsParams {

    /**
     * The user name.
     */
    @Nullable
    private String username;

    /**
     * The user password.
     */
    @Nullable
    private String password;

    /**
     * Set the user password
     *
     * @param password the user password.
     */
    public void setPassword(@Nullable final String password) {
        this.password = password;
    }

    /**
     * Get the user password
     *
     * @return the user password.
     */
    @Nullable
    public String getPassword() {
        return password;
    }

    /**
     * Set the user name
     *
     * @param username the user name.
     */
    public void setUsername(@Nullable final String username) {
        this.username = username;
    }

    /**
     * Get the user name
     *
     * @return the user name.
     */
    @Nullable
    public String getUsername() {
        return username;
    }

    @Override
    public String toString() {
        return "UserCredentialsParams{" + "username='" + username + '\'' + ", password='" + password + '\'' + '}';
    }
}
