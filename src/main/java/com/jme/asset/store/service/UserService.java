package com.jme.asset.store.service;

import java.util.List;

/**
 * The User service interface
 *
 * @author Yunkevich Andrei
 */
public interface UserService {

    /**
     * Add user
     *
     * @param login      The user login
     * @param password   The user password
     * @param mail       The User mail
     * @param firstName  The user first name
     * @param lastName   The user last name
     * @param middleName The user middle name
     * @param roles      The user roles
     */
    void addUser(String login, String password, String mail,
                 String firstName, String lastName, String middleName, List<String> roles);

    /**
     * Add role to the user
     *
     * @param login The user login
     * @param role  The user role
     * @return The result of adding
     */
    boolean addRoleToUser(String login, String role);

    /**
     * Remove role to the user
     *
     * @param login The user login
     * @param role  The user role
     * @return The result of removing
     */
    boolean removeRoleFromUser(String login, String role);

}
