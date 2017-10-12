package com.jme.asset.store.database.repository;

import com.jme.asset.store.database.entity.role.RoleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Optional;

public interface RoleRepository extends PagingAndSortingRepository<RoleEntity, Long> {

    Optional <RoleEntity> findByName(String name);
    void deleteByName (String name);
}
