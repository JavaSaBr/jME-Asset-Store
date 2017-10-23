package com.jme.asset.store.repository;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The UserEntity repository.
 *
 * @author Denis Lesheniuk.
 */
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

    /**
     * Find user by login
     *
     * @param login The user login
     * @return The user
     */
    UserEntity findByLogin(String login);

    /**
     * Remove user by user login
     *
     * @param login The user login
     */
    void removeByLogin(String login);
}
