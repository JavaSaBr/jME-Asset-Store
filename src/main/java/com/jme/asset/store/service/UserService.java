package com.jme.asset.store.service;

import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;

import java.util.List;
import java.util.Optional;

/**
 * The User service interface
 *
 * @author Yunkevich Andrei
 */
public interface UserService {

    /**
     * Find user by id
     *
     * @param id User id
     * @return The created User
     */
    Optional<UserEntity> findById(Long id);

    /**
     * Add user
     *
     * @param login        The user login
     * @param password     The user password
     * @param mail         The User mail
     * @param firstName    The user first name
     * @param lastName     The user last name
     * @param middleName   The user middle name
     * @param roleEntities The user roles
     */
    void addUser(String login, String password, String mail,
                 String firstName, String lastName, String middleName, List<RoleEntity> roleEntities);

    /**
     * Find user by login
     *
     * @param login The login user
     * @return User
     */
    UserEntity findByLogin(String login);

    /**
     * Get all users
     *
     * @return user list
     */
    List<UserEntity> getAllUser();

    /**
     * Remove user by id
     *
     * @param id user id
     */
    void removeById(Long id);

    /**
     * Remove user by login
     *
     * @param login user login
     */
    void removeByLogin(String login);

    /**
     * Add role to the user
     *
     * @param login user login
     * @param role  user role
     * @return the result of adding
     */
    boolean isAddRoleToUser(String login, String role);

    /**
     * Remove role to the user
     *
     * @param login user login
     * @param role  user role
     * @return the result of removing
     */
    boolean isRemoveRoleFromUser(String login, String role);

}
