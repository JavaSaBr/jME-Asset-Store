package com.jme.asset.store.data.repository;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.entity.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The User repository
 *
 * @author Denis Lesheniuk
 */
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

    /**
     * Find a user by a name.
     *
     * @param name the role name.
     * @return the role entity or null.
     */
    UserEntity findByName(String name);

    /**
     * Find a user by a name.
     *
     * @param name the role name.
     * @return the role entity or null.
     */
    void deleteByName(String name);
}
