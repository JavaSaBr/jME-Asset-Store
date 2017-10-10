package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public void addUser(UserEntity userEntity);
}
