package com.jme.asset.store.data.repository;

import com.jme.asset.store.data.entity.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository <UserEntity, Long> {
}
