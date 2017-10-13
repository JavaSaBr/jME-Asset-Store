package com.jme.asset.store.controller;

import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/addUser")
    public ResponseEntity<?> addUser(@RequestParam("user_name") final String userName,
                                     @RequestParam("user_password") final String userPassword) {
        userService.addUser(userName, userPassword);
        return ResponseEntity.ok("Successfully added");
    }

    @GetMapping(value = "/allUsers")
    public ResponseEntity<?> allUsers() {
        return ResponseEntity.ok(userService.allUsers());
    }

    @PostMapping(value = "/delById")
    public ResponseEntity<?> delete(@RequestParam("id") final long id) {
        if (userService.delete(id)) {
            return ResponseEntity.ok("User with id \'" + id + "\'" + " successfully deleted");
        }
        return new ResponseEntity<>("No user with id: " + id, HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/getByName")
    public ResponseEntity<?> getUserByName(@RequestParam("name") final String name) {
        return ResponseEntity.ok(userService.getUser(name));
    }

    @PostMapping(value = "/delByName")
    public ResponseEntity<?> delete(@RequestParam("name") final String name) {
        if (userService.delete(name)) {
            return ResponseEntity.ok("User with name \'" + name + "\'" + " successfully deleted");
        }
        return new ResponseEntity<>("No user with name: " + name, HttpStatus.BAD_REQUEST);
    }
}
