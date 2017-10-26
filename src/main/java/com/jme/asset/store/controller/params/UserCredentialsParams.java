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
    private String login;

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
     * Set the user login
     *
     * @param username the user login.
     */
    public void setLogin(@Nullable final String username) {
        this.login = username;
    }

    /**
     * Get the user login
     *
     * @return the user login.
     */
    @Nullable
    public String getLogin() {
        return login;
    }

    @Override
    public String toString() {
        return "UserCredentialsParams{" + "username='" + login + '\'' + ", password='" + password + '\'' + '}';
    }
}
