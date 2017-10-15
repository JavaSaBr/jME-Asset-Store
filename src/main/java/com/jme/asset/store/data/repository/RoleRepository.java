package com.jme.asset.store.data.repository;

import com.jme.asset.store.data.entity.RoleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The Role repository
 *
 * @author Denis Lesheniuk
 */
public interface RoleRepository extends PagingAndSortingRepository<RoleEntity, Long> {

    /**
     * Find a role by a name.
     *
     * @param name the role name.
     * @return the role entity or null.
     */
    RoleEntity findByName(String name);

    /**
     * Find a role by a name.
     *
     * @param name the role name.
     * @return the role entity or null.
     */
    void deleteByName(String name);

}
