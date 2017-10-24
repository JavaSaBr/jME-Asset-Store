package com.jme.asset.store.controller.params;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

/**
 * The request params of creating an user.
 *
 * @author Alena Solonevich
 */
public class UserParams {

    /**
     * The user first name
     */
    @Nullable
    private String firstname;

    /**
     * The user login
     */
    @NotNull
    private String login;
    /**
     * The user password
     */
    @NotNull
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

    public UserParams() {
    }

    /**
     * @return the user first name
     */
    public String getFirstname() {
        return firstname;
    }

    /**
     * @param firstname the user first name
     */
    public void setFirstname(@Nullable final String firstname) {
        this.firstname = firstname;
    }

    /**
     * @return the user login
     */
    public String getLogin() {
        return login;
    }

    /**
     * @param login the user login
     */
    public void setLogin(@NotNull final String login) {
        this.login = login;
    }

    /**
     * @return the user password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the user password
     */
    public void setPassword(@NotNull final String password) {
        this.password = password;
    }

    /**
     * @return the user e-mail
     */
    public String getMail() {
        return mail;
    }

    /**
     * @param mail the user e-mail
     */
    public void setMail(@Nullable final String mail) {
        this.mail = mail;
    }

    /**
     * @return the user middle name
     */
    public String getMiddleName() {
        return middleName;
    }

    /**
     * the user middle name
     */
    public void setMiddleName(@Nullable final String middleName) {
        this.middleName = middleName;
    }

    /**
     * @return the user last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the user last name
     */
    public void setLastName(@Nullable final String lastName) {
        this.lastName = lastName;
    }
}
