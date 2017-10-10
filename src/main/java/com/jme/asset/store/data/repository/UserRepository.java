package com.jme.asset.store.data.repository;

import com.jme.asset.store.data.entity.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The User repository
 *
 * @author Denis Lesheniuk
 */
public interface UserRepository extends PagingAndSortingRepository <UserEntity, Long> {
}
