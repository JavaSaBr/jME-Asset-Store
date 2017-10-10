package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.UserEntity;
import com.jme.asset.store.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

}
