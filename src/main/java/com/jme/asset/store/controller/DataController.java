package com.jme.asset.store.controller;

import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.net.PasswordAuthentication;

@Controller
public class DataController {
    @Autowired
    UserService userService;

    @GetMapping("/addUser")
        public void addUser(@RequestParam("name") String name, @RequestParam("pass") String pass){
            userService.addUser(new UserEntity(name, pass));
        }
}
