package com.jme.asset.store.controller.params;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;

/**
 * The request params of creating an user.
 *
 * @author Alena Solonevich
 */
public class UserRegisterParams {

    /**
     * The user first name
     */
    @Nullable
    private String firstName;

    /**
     * The user login
     */
    @Nullable
    private String login;

    /**
     * The user password
     */
    @Nullable
    private String password;

    /**
     * The user e-mail
     */
    @Nullable
    private String mail;

    /**
     * The user middle name
     */
    @Nullable
    private String middleName;

    /**
     * The user last name
     */
    @Nullable
    private String lastName;

    /**
     * The user role
     */
    @Nullable
    private List<String> roles;

    public UserRegisterParams() {
    }

    /**
     * Get the user first name
     *
     * @return the user first name
     */
    public @Nullable String getFirstName() {
        return firstName;
    }

    /**
     * Set the user first name
     *
     * @param firstName the user first name
     */
    public void setFirstName(@Nullable final String firstName) {
        this.firstName = firstName;
    }

    /**
     * Get the user login
     *
     * @return the user login
     */
    public @Nullable String getLogin() {
        return login;
    }

    /**
     * Set the user login
     *
     * @param login the user login
     */
    public void setLogin(@NotNull final String login) {
        this.login = login;
    }

    /**
     * Get the user password
     *
     * @return the user password
     */
    public @Nullable String getPassword() {
        return password;
    }

    /**
     * Set the user password
     *
     * @param password the user password
     */
    public void setPassword(@NotNull final String password) {
        this.password = password;
    }

    /**
     * Get the user e-mail
     *
     * @return the user e-mail
     */
    public @Nullable String getMail() {
        return mail;
    }

    /**
     * Set the user e-mail
     *
     * @param mail the user e-mail
     */
    public void setMail(@Nullable final String mail) {
        this.mail = mail;
    }

    /**
     * Get the user middle name
     *
     * @return the user middle name
     */
    public @Nullable String getMiddleName() {
        return middleName;
    }

    /**
     * Set the user middle name
     * the user middle name
     */
    public void setMiddleName(@Nullable final String middleName) {
        this.middleName = middleName;
    }

    /**
     * Get the user last name
     *
     * @return the user last name
     */
    public @Nullable String getLastName() {
        return lastName;
    }

    /**
     * Set the user last name
     *
     * @param lastName the user last name
     */
    public void setLastName(@Nullable final String lastName) {
        this.lastName = lastName;
    }

    /**
     * Get the user roles
     * @return the user roles;
     */
    public @Nullable List<String> getRoles() {
        return roles;
    }

    /**
     * Set the user roles
     * @param roles the user roles
     */
    public void setRole(@Nullable List <String> roles) {
        this.roles = roles;
    }

}
