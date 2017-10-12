package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.RoleEntity;
import com.jme.asset.store.db.entity.UserEntity;
import com.jme.asset.store.db.repository.RoleRepository;
import com.jme.asset.store.db.repository.UserRepository;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
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
    public Optional<UserEntity> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserEntity findByName(String name) {
        Optional<UserEntity> optional = Optional.ofNullable(userRepository.findByName(name));
        if (optional.isPresent())
            return optional.get();
        return null;
    }

    @Override
    public List<UserEntity> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public void removeById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void removeByName(String name) {
        userRepository.deleteByName(name);
    }

}
