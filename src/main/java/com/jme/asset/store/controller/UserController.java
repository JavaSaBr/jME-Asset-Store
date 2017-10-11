package com.jme.asset.store.controller;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.data.repository.RoleRepository;
import com.jme.asset.store.service.UserService;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import com.jme.asset.store.utils.exceptions.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/")
    public ResponseEntity<?> getAllUsers(){
        List <UserEntity> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/add")
    public ResponseEntity<String> addUser(@RequestParam("name") String name, @RequestParam("pass") String pass) {
        userService.addUser(new UserEntity(name, pass));
        return ResponseEntity.ok("New user is added");
    }

    @PostMapping("name/{name}/role/add/{role}")
    public ResponseEntity<String> addUserRole(@PathVariable("name") String name, @PathVariable("role") String role) {
        try {
            userService.addUserRole(name, role);
        } catch (RoleNotFoundException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role not found");
        } catch (UserNotFoundException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (RoleAlreadyExistException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role is already exist");
        }
        return ResponseEntity.ok("New users role is added");
    }
}
