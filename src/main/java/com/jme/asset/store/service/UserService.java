package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService{
    void addUser(UserEntity userEntity) /*throws ConstraintViolationException, MySQLIntegrityConstraintViolationException, DataIntegrityViolationException*/;
    UserEntity getUserByName(String name);
    UserEntity getUserById(Long id);
    boolean deleteByID(long id);
    boolean deleteByName(String name);
    List<UserEntity> allUsers();
}
