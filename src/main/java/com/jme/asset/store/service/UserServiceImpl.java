package com.jme.asset.store.service;

import com.fasterxml.jackson.databind.util.ClassUtil;
import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.data.repository.RoleRepository;
import com.jme.asset.store.data.repository.UserRepository;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import com.jme.asset.store.utils.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private RoleService roleService;

    @Override
    public void addUser(String name ,String password, List<String> roles) {

        List <RoleEntity> role = roles.stream().map(roleService::getRole).collect(Collectors.toList());
        UserEntity user = new UserEntity(name, password, role);

       userRepository.save(user);

    }

    @Override
    public void addUserRole(String name, String role) throws RoleAlreadyExistException,
            RoleNotFoundException, UserNotFoundException {
        RoleEntity roleEntity = roleRepository.findByName(role);
        if (roleEntity == null)
            throw new RoleNotFoundException(role);
        UserEntity userEntity = userRepository.findByName(name);
        if (userEntity == null)
            throw new UserNotFoundException(name);
        if (userEntity.getRoles().contains(roleEntity))
            throw new RoleAlreadyExistException(role);
        userEntity.getRoles().add(roleEntity);
        userRepository.save(userEntity);
    }

    @Override
    public List<UserEntity> getAllUsers() {
        List<UserEntity> users = new ArrayList<>();
        for(UserEntity user: userRepository.findAll())
            users.add(user);
        return users;
    }

    @Override
    public UserEntity findUserByUserName(String name) {
        return userRepository.findByName(name);
    }

    @Override
    @Transactional
    public void deleteUserByUserName(String name) {
        userRepository.deleteByName(name);
    }

    @Override
    @Transactional
    public void deleteUserRole(String name, String role) throws  RoleNotFoundException, UserNotFoundException {
        RoleEntity roleEntity = roleRepository.findByName(role);
        if (roleEntity == null)
            throw new RoleNotFoundException(role);
        UserEntity userEntity = userRepository.findByName(name);
        if (userEntity == null)
            throw new UserNotFoundException(name);
        if (userEntity.getRoles().contains(roleEntity))

        userEntity.getRoles().remove(roleEntity);
        userRepository.save(userEntity);
    }


}
