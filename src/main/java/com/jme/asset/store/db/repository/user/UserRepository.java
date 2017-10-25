package com.jme.asset.store.db.repository.user;

import com.jme.asset.store.db.entity.user.UserEntity;
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
     * @param login the user login
     * @return the user
     */
    UserEntity findByLogin(String login);

    /**
     * Remove user by user login
     *
     * @param login the user login
     */
    void removeByLogin(String login);
}
