package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void addUser(UserEntity userEntity) {
        userRepository.save(userEntity);
    }

    @Override
    public UserEntity getUserByName(String name) {
        Optional<UserEntity> op = userRepository.findByName(name);
        return op.orElse(null);
    }

    @Override
    public UserEntity getUserById(Long id) {
        Optional<UserEntity> op = userRepository.findById(id);
        return op.orElse(null);
    }


    @Override
    public boolean deleteByID(long id) {
        if(userRepository.findById(id).isPresent()) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteByName(String name) {
        if(userRepository.findByName(name).isPresent()) {
            userRepository.deleteByName(name);
            return true;
        }
        return false;
    }

    @Override
    public List<UserEntity> allUsers() {
        return userRepository.findAll();
    }
}
