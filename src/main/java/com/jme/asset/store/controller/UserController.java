package com.jme.asset.store.controller;

import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * The controller provides multiple of endpoints for work with User.
 *
 * @author Denis Lesheniuk
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/add")
        public ResponseEntity <String> addUser(@RequestParam("name") String name, @RequestParam("pass") String pass){
            userService.addUser(new UserEntity(name, pass));
            return ResponseEntity.ok("New user is added");
        }
}
