package com.jme.asset.store.controller;

import com.jme.asset.store.controller.Exception.RoleAlreadyExistException;
import com.jme.asset.store.controller.Exception.RoleNotFoundException;
import com.jme.asset.store.controller.Exception.UserAlreadyExistException;
import com.jme.asset.store.controller.Exception.UserNotFoundException;
import com.jme.asset.store.database.entity.user.UserEntity;
import com.jme.asset.store.service.RoleService;
import com.jme.asset.store.service.UserService;
import org.hibernate.loader.plan.spi.Return;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller

public class DataController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/addUser")
    public ResponseEntity<?> addUser(
            @RequestParam("name") String name,
            @RequestParam("password") String password,
            @RequestParam("role") String role) {
        try {
            userService.addUser(name, password, role);
        } catch (UserAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is already exist!");
        }
        return ResponseEntity.ok("User is added!");
    }

    @GetMapping(value = "/allUsers")
    public List allUsers() {
        return userService.allUsers();
    }

    @GetMapping(value = "/findUserByID")
    public ResponseEntity<?> find(@RequestParam("id") Long id) {

        try {
            userService.find(id);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not exist!");
        }
        return ResponseEntity.ok(userService.find(id));
    }

    @GetMapping(value = "/findUserByName")
    public ResponseEntity<?> find(@RequestParam("name") String name) {
        try {
            userService.find(name);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User is not found!");
        }
        return ResponseEntity.ok(userService.find(name));
    }

    @PostMapping(value = "/deleteUserByID")
    public ResponseEntity<?> delete(@RequestParam("id") Long id) {

        try {
            userService.delete(id);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User not found");
        }
        return ResponseEntity.ok("User is deleted!");
    }

    @PostMapping(value = "/deleteUserByName")
    public ResponseEntity<?> delete(@RequestParam("name") String name) {
        try {
            userService.delete(name);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("user is not found!");
        }
        return ResponseEntity.ok("User is deleted!");
    }

    @Autowired
    RoleService roleService;

    @GetMapping(value = "/allRoles")
    public ResponseEntity<?> allRoles() {
        return ResponseEntity.ok((List) roleService.allRoles());
    }

    @PostMapping(value = "/deleteRoleByName")
    public ResponseEntity<?> deleteRole(@RequestParam("name") String name) {
        try {
            roleService.deleteRole(name);
        } catch (RoleNotFoundException exp) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is not found!");
        }
        return ResponseEntity.ok("Role is deleted!");
    }

  /*  @PostMapping(value = "deleteRoleByID")
    public ResponseEntity<?> deleteRole(@RequestParam("id") Long id) {
        try {
            roleService.deleteRole(id);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is not found!");
        }
        return ResponseEntity.ok("Role is deleted!");
    }*/

    @GetMapping(value = "findRoleByName")
    public ResponseEntity<?> findRole(@RequestParam("name") String name) {
        try {
            roleService.findRole(name);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is not found!");
        }
        return ResponseEntity.ok(roleService.findRole(name));
    }

    @PostMapping(value = "addRole")
    public ResponseEntity<?> addRole(@RequestParam("name") String name) {
        try {
            roleService.addRole(name);
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is already exist!");
        }
        return ResponseEntity.ok("Role is added!");
    }

    @PostMapping(value = "addUserRole")
    public ResponseEntity<?> addUserRole(@RequestParam("name") String name, @RequestParam("role") String role) {
        try {
            userService.addUserRole(name, role);
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("The user has already this role!");
        }
        return ResponseEntity.ok("The role for user is added!");
    }

    @PostMapping(value = "deleteUserRole")
    public ResponseEntity<?> delUserRole (@RequestParam ("name") String name, @RequestParam ("role") String role) {
        try {
            userService.delUserRole(name,role);
        }catch (RoleNotFoundException e){
            return  ResponseEntity.status(HttpStatus.CONFLICT).body("The user has no same role!");
        }
            return ResponseEntity.ok("Role is deleted from the user!");
        }
    }















