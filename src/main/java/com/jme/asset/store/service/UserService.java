package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {

    void addUser(UserEntity userEntity) ;

    Optional<UserEntity> findById(Long id);

    UserEntity findByName(String name);

    List<UserEntity> getAllUser();

    void removeById(Long id);

    void removeByName(String name);

}
