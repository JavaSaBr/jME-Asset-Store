package com.jme.asset.store.db.repository.user;

import com.jme.asset.store.db.entity.user.RoleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The repository to work with role entities in DB.
 *
 * @author Denis Lesheniuk.
 */
public interface RoleRepository extends PagingAndSortingRepository<RoleEntity, Long> {

    /**
     * Find a role by name.
     *
     * @param name the role name.
     * @return the role entity or null.
     */
    RoleEntity findByName(String name);
}
