package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService{
    void addUser(UserEntity userEntity) /*throws ConstraintViolationException, MySQLIntegrityConstraintViolationException, DataIntegrityViolationException*/;
    UserEntity getUserByName(String name);
    UserEntity getUserById(Long id);
    void deleteByID(long id);
    void deleteByName(String name);
    List<?> allUsers();
}
