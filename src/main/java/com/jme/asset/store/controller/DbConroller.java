package com.jme.asset.store.controller;

import com.jme.asset.store.db.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class DbConroller {

    @Autowired
    UserService userService;

    @RequestMapping(value = "addUser2", method = RequestMethod.GET)
    public String addUser(@RequestParam("name") String name, @RequestParam("password") String password) {
        userService.addUser(new UserEntity(name, password));
        return "/";
    }
}
