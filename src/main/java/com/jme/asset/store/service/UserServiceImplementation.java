package com.jme.asset.store.service;

import com.jme.asset.store.controller.Exception.RoleAlreadyExistException;
import com.jme.asset.store.controller.Exception.RoleNotFoundException;
import com.jme.asset.store.controller.Exception.UserNotFoundException;
import com.jme.asset.store.database.entity.role.RoleEntity;
import com.jme.asset.store.database.entity.user.UserEntity;
import com.jme.asset.store.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserServiceImplementation implements UserService {

    private final UserRepository userRepository;

    private final RoleService roleService;

    @Autowired
    public UserServiceImplementation(UserRepository userRepository, RoleService roleService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
    }

    @Override
    public void addUser(final String name, final String password, final String role) {
        final RoleEntity roleEntity = roleService.find(role);
        List<RoleEntity> roles = new ArrayList<>();
        roles.add(roleEntity);
        UserEntity userEntity = new UserEntity(name, password, roles);
        userRepository.save(userEntity);
    }

    @Override
    public void addUserRole(final String userName, final String roleName) {
        final Optional<UserEntity> opt = userRepository.findByName(userName);
        final RoleEntity roleEntity = roleService.find(roleName);
        final UserEntity userEntity = opt.get();
        if (userEntity.getRoles().contains(roleEntity)) {
            throw new RoleAlreadyExistException();
        }
        userEntity.getRoles().add(roleEntity);
        userRepository.save(userEntity);
    }

    @Override
    public void delete(final String userName, final String roleName) {
        final Optional<UserEntity> opt = userRepository.findByName(userName);
        final UserEntity userEntity = opt.get();
        final RoleEntity userRole = roleService.find(roleName);
        if (!userEntity.getRoles().contains(userRole)) {
            throw new RoleNotFoundException();
        } else {
            userEntity.getRoles().remove(userRole);
            userRepository.save(userEntity);
        }
    }

    @Override
    public List<UserEntity> allUsers() {
        return (List) userRepository.findAll();
    }

    @Override
    public UserEntity find(final Long id) {
        final Optional<UserEntity> opt = userRepository.findById(id);
        if (!opt.isPresent()) throw new UserNotFoundException();
        return opt.get();
    }

    @Override
    public UserEntity find(final String name) {
        final Optional<UserEntity> opt = userRepository.findByName(name);
        if (!opt.isPresent()) throw new UserNotFoundException();
        return opt.get();
    }

    @Override
    public void delete(final String name) {
        final Optional<UserEntity> opt = userRepository.findByName(name);
        if (!opt.isPresent()) throw new UserNotFoundException();
        userRepository.deleteByName(name);
    }

    @Override
    public void delete(final Long id) {
        final Optional<UserEntity> opt = userRepository.findById(id);
        if (opt.isPresent()) {
            userRepository.deleteById(id);
        } else {
            throw new UserNotFoundException();
        }
    }
}


