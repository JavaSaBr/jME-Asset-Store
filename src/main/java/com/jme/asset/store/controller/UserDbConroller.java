package com.jme.asset.store.controller;

import com.jme.asset.store.db.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import com.jme.asset.store.service.UserServiceImpl;
import com.mysql.jdbc.exceptions.jdbc4.MySQLDataException;
import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Controller
public class UserDbConroller {

    @Autowired
    UserService userService;

    @RequestMapping(value = "addUser", method = RequestMethod.GET)
    public String addUser(@RequestParam("name") String name, @RequestParam("password") String password) {
        userService.addUser(new UserEntity(name, password));
        return "/";
    }

    @RequestMapping(value = "findById", method = RequestMethod.GET)
    public ResponseEntity<?> findById(@RequestParam("id") Long id) {

        return ResponseEntity.ok().body(userService.findById(id));
    }

    @RequestMapping(value = "getAllUser", method = RequestMethod.GET)
    public ResponseEntity<?> getAllUser() {
        return ResponseEntity.ok().body(userService.getAllUser());
    }

    @RequestMapping(value = "removeById", method = RequestMethod.GET)
    public ResponseEntity<?> removeById(@RequestParam("id") Long id) {
        userService.removeById(id);
        return ResponseEntity.ok().body("successfully remove by id ");
    }

    @RequestMapping(value = "removeByName", method = RequestMethod.GET)
    public ResponseEntity<?> removeByName(@RequestParam("name") String name) {
        userService.removeByName(name);
        return ResponseEntity.ok().body("successfully remove by name");
    }


}
