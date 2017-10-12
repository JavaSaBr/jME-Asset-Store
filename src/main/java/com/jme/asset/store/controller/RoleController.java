package com.jme.asset.store.controller;

import com.jme.asset.store.entity.RolesEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.service.RolesService;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RoleController {

    @Autowired
    RolesService rolesService;

    @PostMapping(value = "/addRole")
    public ResponseEntity<?> addRole(@RequestParam("name") String name){
        rolesService.addRole(new RolesEntity(name));
        return ResponseEntity.ok("Success");
    }

    @PostMapping(value = "/addRoleToUser")
    public ResponseEntity<?> addRoleToUser(@RequestParam("user_name") String user_name, @RequestParam("role_name") String role_name){
        if(rolesService.addRoleToUser(user_name,role_name)){
            return ResponseEntity.ok("Success adding role " + role_name + " to " + user_name);
        }
        return new ResponseEntity<>(user_name +" has such role: " + role_name, HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "/delRoleFromUser")
    public ResponseEntity<?> delRoleFromUser(@RequestParam("user_name") String user_name, @RequestParam("role_name") String role_name){
        if(rolesService.deleteRoleFromUser(user_name,role_name)){
            return ResponseEntity.ok(role_name + " successfully added to " + user_name);
        }
        return new ResponseEntity<>(user_name + " has not got role " + role_name, HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/allRoles")
    public ResponseEntity<?> delRoleFromUser(){
        return ResponseEntity.ok(rolesService.allRoles());
    }

    @PostMapping(value = "/delRole")
    public ResponseEntity<?> delRole(@RequestParam("role_name") String role_name){
        if(rolesService.deleteRoleByName(role_name)){
            return ResponseEntity.ok(role_name + " successfully delete");
        }
        return new ResponseEntity<>("No such role: " + role_name, HttpStatus.BAD_REQUEST);
    }
}
