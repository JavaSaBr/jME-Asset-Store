package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    @Override
    public UserEntity getUserByName(String name) {
        Optional<UserEntity> op = userRepository.findByName(name);
        if (op.isPresent()) return op.get();
        return null;
    }


    @Override
    public void deleteByID(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void deleteByName(String name) {
        userRepository.deleteByName(name);
    }

    @Override
    public List<UserEntity> allUsers() {
        return userRepository.findAll();
    }
}
