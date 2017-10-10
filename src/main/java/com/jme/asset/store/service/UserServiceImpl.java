package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.data.repository.UserRepository;
import com.sun.istack.internal.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.websocket.server.ServerEndpoint;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Override
    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }
}
