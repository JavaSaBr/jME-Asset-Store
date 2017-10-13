package com.jme.asset.store.controller;

import com.jme.asset.store.entity.RolesEntity;
import com.jme.asset.store.service.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RoleController {

    private final RolesService rolesService;

    @Autowired
    public RoleController(RolesService rolesService) {
        this.rolesService = rolesService;
    }

    @PostMapping(value = "/addRole")
    public ResponseEntity<?> addRole(@RequestParam("name") final String name) {
        rolesService.addRole(name);
        return ResponseEntity.ok("Success");
    }

    @PostMapping(value = "/addRoleToUser")
    public ResponseEntity<?> addRoleToUser(@RequestParam("userName") final String userName,
                                           @RequestParam("roleName") final String roleName) {
        if (rolesService.addRoleToUser(userName, roleName)) {
            return ResponseEntity.ok("Success adding role " + roleName + " to " + userName);
        }
        return new ResponseEntity<>(userName + " has such role: " + roleName, HttpStatus.BAD_REQUEST);
    }

    @PostMapping(value = "/delRoleFromUser")
    public ResponseEntity<?> delete(@RequestParam("userName") final String userName,
                                    @RequestParam("roleName") final String roleName) {
        if (rolesService.deleteRoleFromUser(userName, roleName)) {
            return ResponseEntity.ok(roleName + " successfully added to " + userName);
        }
        return new ResponseEntity<>(userName + " has not got role " + roleName, HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "/allRoles")
    public ResponseEntity<?> allRoles() {
        return ResponseEntity.ok(rolesService.allRoles());
    }

    @PostMapping(value = "/delRole")
    public ResponseEntity<?> delete(@RequestParam("roleName") final String roleName) {
        if (rolesService.deleteRoleByName(roleName)) {
            return ResponseEntity.ok(roleName + " successfully delete");
        }
        return new ResponseEntity<>("No such role: " + roleName, HttpStatus.BAD_REQUEST);
    }
}
