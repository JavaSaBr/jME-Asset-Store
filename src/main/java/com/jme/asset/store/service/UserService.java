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
     * @param login      the user login
     * @param password   the user password
     * @param mail       the User mail
     * @param firstName  the user first name
     * @param lastName   the user last name
     * @param middleName the user middle name
     * @param roles      the user roles
     */
    void addUser(String login, String password, String mail,
                 String firstName, String lastName, String middleName, List<String> roles);

    /**
     * Add role to the user
     *
     * @param login the user login
     * @param role  the user role
     * @return the result of adding
     */
    boolean addRoleToUser(String login, String role);

    /**
     * Remove role to the user
     *
     * @param login the user login
     * @param role  the user role
     * @return the result of removing
     */
    boolean removeRoleFromUser(String login, String role);

}
