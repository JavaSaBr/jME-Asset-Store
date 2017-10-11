package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import com.jme.asset.store.utils.exceptions.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public void addUser( String name , String password, List <String> role);

    public void addUserRole(String name, String role) throws RoleAlreadyExistException,
            RoleNotFoundException, UserNotFoundException;

    public List<UserEntity> getAllUsers();

    public UserEntity findUserByUserName(String name);

    public void deleteUserByUserName(String name);

    public void deleteUserRole(String name, String role)throws
            RoleNotFoundException, UserNotFoundException;

}
