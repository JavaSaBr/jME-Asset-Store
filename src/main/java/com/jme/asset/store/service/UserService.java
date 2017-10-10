package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService{
    void addUser(UserEntity userEntity);
    UserEntity getUserByName(String name);
    void deleteByID(long id);
    void deleteByName(String name);
    List<?> allUsers();
}
