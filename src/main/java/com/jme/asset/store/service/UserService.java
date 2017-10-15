package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import com.jme.asset.store.utils.exceptions.UserNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    public void addUser( String name , String password, List <String> role);

    public void addUserRole(String name, String role) throws RoleAlreadyExistException,
            RoleNotFoundException, UserNotFoundException;

    public List<UserEntity> getAllUsers();

    public UserEntity findUserByUserName(String name);

    public Optional<UserEntity> findUserById(Long id);

    public void deleteUserByUserName(String name);

    public void deleteUserByUserId(Long id);

    public void deleteUserRole(String name, String role)throws
            RoleNotFoundException, UserNotFoundException;

    public List<UserEntity> findAllUsersByRole(String roleEntity);

}
