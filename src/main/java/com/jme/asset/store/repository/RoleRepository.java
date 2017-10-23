package com.jme.asset.store.repository;

import com.jme.asset.store.entity.RoleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The RoleEntity repository.
 *
 * @author Denis Lesheniuk.
 */
public interface RoleRepository extends PagingAndSortingRepository<RoleEntity, Long> {

    /**
     * Find role by name
     *
     * @param name The role name
     * @return The role entity
     */
    RoleEntity findByName(String name);
}
