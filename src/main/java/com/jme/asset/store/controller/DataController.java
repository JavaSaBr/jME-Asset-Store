package com.jme.asset.store.controller;

import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class DataController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/addUser")
    public ResponseEntity<?> addUser(@RequestParam("user_name") String userName, @RequestParam("user_password") String userPassword){
        userService.addUser(new UserEntity(userName,userPassword));
        return ResponseEntity.ok("Adding success");
    }

    @GetMapping(value = "/allUsers")
    public ResponseEntity<?> allUsers(){
        return ResponseEntity.ok(userService.allUsers());
    }

    @GetMapping(value = "/delById")
    public ResponseEntity<?> delById(@RequestParam("id") long id){
        userService.deleteByID(id);
        return ResponseEntity.ok("");
    }

    @GetMapping(value = "/getByName")
    public ResponseEntity<?> getUserByName(String name){
        return ResponseEntity.ok(userService.getUserByName(name));
    }

    @GetMapping(value = "/delByName")
    public ResponseEntity<?> delByName(String name){
        userService.deleteByName(name);
        return ResponseEntity.ok("");
    }
}
