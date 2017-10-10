package com.jme.asset.store.data.repository;

import com.jme.asset.store.data.entity.RoleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The Role repository
 *
 * @author Denis Lesheniuk
 */
public interface RoleRepository extends PagingAndSortingRepository<RoleEntity, Long> {
}
