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
     * @param name the role name
     * @return the role entity
     */
    RoleEntity findByName(String name);
}
