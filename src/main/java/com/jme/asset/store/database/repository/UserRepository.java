package com.jme.asset.store.database.repository;

import com.jme.asset.store.database.entity.role.RoleEntity;
import com.jme.asset.store.database.entity.user.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

    Optional<UserEntity> findByName(String name);
    void deleteByName (String name);
    List<UserEntity> findAllByRoles (RoleEntity roleEntity);
  //  Object save (UserEntity userEntity);
}
