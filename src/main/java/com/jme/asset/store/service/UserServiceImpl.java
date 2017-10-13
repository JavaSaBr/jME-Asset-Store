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
    public void addUser(final String name, final String password) {
        userRepository.save(new UserEntity(name, password));
    }

    @Override
    public UserEntity getUser(final String name) {
        final Optional<UserEntity> op = userRepository.findByName(name);
        return op.orElse(null);
    }

    @Override
    public UserEntity getUser(final long id) {
        final Optional<UserEntity> op = userRepository.findById(id);
        return op.orElse(null);
    }


    @Override
    public boolean delete(final long id) {
        if (!userRepository.findById(id).isPresent()) return false;
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean delete(final String name) {
        if (userRepository.findByName(name).isPresent()) {
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
