package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.security.JmeUser;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;
import java.util.function.Consumer;

/**
 * The service to work with application users.
 *
 * @author Yunkevich Andrei
 */
public interface UserService extends UserDetailsService {

    @Override
    @NotNull JmeUser loadUserByUsername(@NotNull String username) throws UsernameNotFoundException;

    /**
     * Loads or creates an admin user.
     *
     * @return the admin user.
     */
    @NotNull JmeUser loadAdminUser();

    /**
     * Create a new user in the system.
     *
     * @param type      the type of a user.
     * @param userName  the user name.
     * @param password  the password.
     * @param roleNames the list of requested roles.
     * @param setter    the function to set other fields.
     * @return the created user.
     * @throws RuntimeException if an user can't be created.
     */
    <T extends UserEntity> @NotNull T create(@NotNull Class<T> type, @NotNull String userName, @NotNull String password,
                                             @NotNull List<String> roleNames, @Nullable Consumer<T> setter) throws RuntimeException;

    /**
     * Add role to the user
     *
     * @param login the user login
     * @param role  the user role
     */
    void addRoleToUser(String login, String role);

    /**
     * Remove role to the user
     *
     * @param login the user login
     * @param role  the user role
     */
    void removeRoleFromUser(String login, String role);

    /**
     * Authenticate user
     *
     * @param login    the user login
     * @param password the user password
     * @return the user entity
     */
    UserEntity authenticate(String login, String password);

    /**
     * Find userEntity by login
     *
     * @param login the user login
     * @return the user entity
     */
    UserEntity load(String login);
}
