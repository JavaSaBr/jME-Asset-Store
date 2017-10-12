package com.jme.asset.store.service;

import com.jme.asset.store.controller.Exception.UserAlreadyExistException;
import com.jme.asset.store.controller.Exception.UserNotFoundException;
import com.jme.asset.store.database.entity.user.UserEntity;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

public interface UserService {

   void addUser(String name, String password, String role);

   void addUserRole (String name, String role);

   void delUserRole (String name, String role);

   List allUsers();

    UserEntity find(Long id) ;

    UserEntity find(String name);

    void delete(String name) ;

    void delete(Long id)  ;


    //void saveUser (UserEntity userEntity);

}
