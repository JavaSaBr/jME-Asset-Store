package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.data.repository.RoleRepository;
import com.jme.asset.store.data.repository.UserRepository;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import com.jme.asset.store.utils.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    @Override
    public void addUserRole(String name, String role) throws RoleAlreadyExistException,
    RoleNotFoundException, UserNotFoundException{
        RoleEntity roleEntity = roleRepository.findByName(role);
        if(roleEntity == null)
          throw new RoleNotFoundException(role);
        UserEntity userEntity = userRepository.findByName(name);
        if(userEntity == null)
            throw new UserNotFoundException(name);
        if(userEntity.getRoles().contains(roleEntity))
            throw new RoleAlreadyExistException(role);
        userEntity.getRoles().add(roleEntity);
        userRepository.save(userEntity);
    }
}
