package com.jme.asset.store.db.repository.user;

import com.jme.asset.store.db.entity.user.RoleEntity;
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
