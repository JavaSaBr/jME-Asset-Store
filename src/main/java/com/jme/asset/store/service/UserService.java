package com.jme.asset.store.service;

import com.jme.asset.store.database.entity.user.UserEntity;

import java.util.List;

public interface UserService {

    void addUser(String name, String password, String role);

    void addUserRole(String userName, String roleName);

    void delete(String userName, String roleName);

    List<UserEntity> allUsers();

    UserEntity find(Long id);

    UserEntity find(String name);

    void delete(String name);

    void delete(Long id);
}
