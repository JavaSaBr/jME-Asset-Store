package com.jme.asset.store.service;

import com.jme.asset.store.controller.Exception.RoleAlreadyExistException;
import com.jme.asset.store.controller.Exception.RoleNotFoundException;
import com.jme.asset.store.controller.Exception.UserAlreadyExistException;
import com.jme.asset.store.controller.Exception.UserNotFoundException;
import com.jme.asset.store.database.entity.role.RoleEntity;
import com.jme.asset.store.database.entity.user.UserEntity;
import com.jme.asset.store.database.repository.UserRepository;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    RoleService roleService;

    @Override
    public void addUser(String name, String password, String role) {
        //Optional<UserEntity> opt = userRepository.findByName(name);
        // if (opt.isPresent()) throw new UserAlreadyExistException();
        RoleEntity roleEntity = roleService.findRole(role);
        List<RoleEntity> roles = new ArrayList<>();
        roles.add(roleEntity);
        UserEntity userEntity = new UserEntity(name, password, roles);
        userRepository.save(userEntity);
    }

    @Override
    public void addUserRole(String name, String role) {
        Optional<UserEntity> opt = userRepository.findByName(name);
        RoleEntity roleEntity = roleService.findRole(role);
        UserEntity userEntity = opt.get();
        if (userEntity.getRoles().contains(roleEntity)) {
            throw new RoleAlreadyExistException();
        }
        userEntity.getRoles().add(roleEntity);
        userRepository.save(userEntity);
    }

    @Override
    public void delUserRole(String name, String role) {
        Optional<UserEntity> opt = userRepository.findByName(name);
        UserEntity userEntity = opt.get();
        RoleEntity  userRole =  roleService.findRole(role);
        if (!userEntity.getRoles().contains(userRole)) {
            throw new RoleNotFoundException();
        }
        userEntity.getRoles().remove(userRole);
        userRepository.save(userEntity);
    }

    @Override
    public List allUsers() {
        return (List) userRepository.findAll();
    }


    @Override
    public UserEntity find(Long id) {
        Optional<UserEntity> opt = userRepository.findById(id);
        if (!opt.isPresent()) throw new UserNotFoundException();
        return opt.get();
    }

    @Override
    public UserEntity find(String name) {
        Optional<UserEntity> opt = userRepository.findByName(name);

        if (!opt.isPresent()) throw new UserNotFoundException();
        return opt.get();
    }


    @Override
    public void delete(String name) {
        Optional<UserEntity> opt = userRepository.findByName(name);
        if (!opt.isPresent()) throw new UserNotFoundException();
        userRepository.deleteByName(name);
    }

    @Override
    public void delete(Long id) {
        Optional<UserEntity> opt = userRepository.findById(id);
        if (!opt.isPresent()) throw new UserNotFoundException();
        userRepository.deleteById(id);
    }
   /* @Autowired
    SessionFactory sessionFactory;
    @Override
    public void saveUser (UserEntity userEntity) {
        Session session = sessionFactory.getCurrentSession();
        session.save(userEntity);
    }*/

}


