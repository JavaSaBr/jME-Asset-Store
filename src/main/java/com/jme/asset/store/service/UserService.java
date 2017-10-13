package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    void addUser(final String name, final String password);

    UserEntity getUser(final String name);

    UserEntity getUser(final long id);

    boolean delete(final long id);

    boolean delete(final String name);

    List<UserEntity> allUsers();
}
