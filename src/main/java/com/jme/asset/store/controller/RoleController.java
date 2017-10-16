package com.jme.asset.store.controller;

import com.jme.asset.store.db.entity.RoleEntity;
import com.jme.asset.store.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RoleController {
    final
    RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @RequestMapping(value = "addRole", method = RequestMethod.GET)
    public ResponseEntity<?> addRole(@RequestParam("role") String role) {
        roleService.addRole(new RoleEntity(role));
        return ResponseEntity.ok().body("add");
    }

    @RequestMapping(value = "removeRole", method = RequestMethod.GET)
    public ResponseEntity<?> removeRole(@RequestParam("role") String role) {
        roleService.removeRole(role);
        return ResponseEntity.ok().body("remove");
    }

    @RequestMapping(value = "getRoles", method = RequestMethod.GET)
    public ResponseEntity<?> getRoles() {
        return ResponseEntity.ok().body(roleService.getAllRole());
    }

    @RequestMapping(value = "addRoleByUser", method = RequestMethod.GET)
    public ResponseEntity<?> addRoleByUser(@RequestParam("name") String name, @RequestParam("role") String role) {
        if (roleService.addRoleToUser(name, role))
            return ResponseEntity.ok().body("role added");

        return ResponseEntity.ok().body("user have this role");
    }

    @RequestMapping(value = "removeRoleByUser", method = RequestMethod.GET)
    public ResponseEntity<?> removeRoleByUser(@RequestParam("name") String name, @RequestParam("role") String role) {
        if (roleService.deleteRoleFromUser(name, role))
            return ResponseEntity.ok().body("role removed");

        return ResponseEntity.ok().body("user don't have this role");
    }
}
