package com.jme.asset.store.controller;

import com.jme.asset.store.controller.Exception.RoleAlreadyExistException;
import com.jme.asset.store.controller.Exception.RoleNotFoundException;
import com.jme.asset.store.controller.Exception.UserAlreadyExistException;
import com.jme.asset.store.controller.Exception.UserNotFoundException;
import com.jme.asset.store.service.RoleService;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller

public class DataController {

    private final RoleService roleService;

    private final UserService userService;

    @Autowired
    public DataController(final UserService userService, final RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @PostMapping(value = "/addUser")
    public ResponseEntity<?> addUser(
            @RequestParam("name") final String name,
            @RequestParam("password") final String password,
            @RequestParam("role") final String role) {
        try {
            userService.addUser(name, password, role);
        } catch (UserAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is already exist!");
        }
        return ResponseEntity.ok("User is added!");
    }

    @GetMapping(value = "/allUsers")
    public ResponseEntity<?> allUsers() {
        return ResponseEntity.ok(userService.allUsers());
    }

    @GetMapping(value = "/findUserByID")
    public ResponseEntity<?> find(@RequestParam("id") final Long id) {
        try {
            userService.find(id);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not exist!");
        }
        return ResponseEntity.ok(userService.find(id));
    }

    @GetMapping(value = "/findUserByName")
    public ResponseEntity<?> find(@RequestParam("name") final String name) {
        try {
            userService.find(name);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not found!");
        }
        return ResponseEntity.ok(userService.find(name));
    }

    @PostMapping(value = "/deleteUserByID")
    public ResponseEntity<?> delete(@RequestParam("id") final Long id) {
        try {
            userService.delete(id);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User not found");
        }
        return ResponseEntity.ok("User is deleted!");
    }

    @PostMapping(value = "/deleteUserByName")
    public ResponseEntity<?> delete(@RequestParam("name") final String name) {
        try {
            userService.delete(name);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not found!");
        }
        return ResponseEntity.ok("User is deleted!");
    }

    @GetMapping(value = "/allRoles")
    public ResponseEntity<?> allRoles() {
        return ResponseEntity.ok(roleService.allRoles());
    }

    @PostMapping(value = "/deleteRole")
    public ResponseEntity<?> deleteRole(@RequestParam("name") final String name) {
        try {
            roleService.delete(name);
        } catch (RoleNotFoundException exp) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is not found!");
        }
        return ResponseEntity.ok("Role is deleted!");
    }

    @GetMapping(value = "findRole")
    public ResponseEntity<?> findRole(@RequestParam("name") final String name) {
        try {
            roleService.find(name);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is not found!");
        }
        return ResponseEntity.ok(roleService.find(name));
    }

    @PostMapping(value = "addRole")
    public ResponseEntity<?> addRole(@RequestParam("name") final String name) {
        try {
            roleService.addRole(name);
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is already exist!");
        }
        return ResponseEntity.ok("Role is added!");
    }

    @PostMapping(value = "addUserRole")
    public ResponseEntity<?> addUserRole(@RequestParam("name") final String userName,
                                         @RequestParam("role") final String roleName) {
        try {
            userService.addUserRole(userName, roleName);
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("The user has already this role!");
        }
        return ResponseEntity.ok("The role for user is added!");
    }

    @PostMapping(value = "deleteUserRole")
    public ResponseEntity<?> delUserRole(@RequestParam("name") final String userName,
                                         @RequestParam("role") final String roleName) {
        try {
            userService.delete(userName, roleName);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("The user has no same role!");
        }
        return ResponseEntity.ok("Role is deleted from the user!");
    }
}















