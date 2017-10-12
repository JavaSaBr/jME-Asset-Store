package com.jme.asset.store.controller;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.service.RoleService;
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
    @Autowired
    RoleService roleService;

    /**
     * The method using the userService retrieves all users from db.
     *
     * @return response with http status ok and the list of the users in the body.
     */
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    /**
     * The method using the userService retrieves the concrete user from db by user name.
     *
     * @param name is the user name.
     * @return response with http status ok and the user in the body.
     */
    @GetMapping("/name/{name}")
    public ResponseEntity<?> getUserByName(@PathVariable("name") String name) {
        return ResponseEntity.ok().body(userService.findUserByUserName(name));
    }

    /**
     * The method using the userService retrieves the concrete user from db by user id.
     *
     * @param id is the user name.
     * @return response with http status ok and the user in the body.
     */
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {

        return ResponseEntity.ok(userService.findUserById(id));
    }


    /**
     * The method using the userService removes the concrete user from db by user name.
     *
     * @param name is the user name.
     * @return response with http status ok and the user in the body.
     */
    @PostMapping("name/{name}/delete")
    public ResponseEntity<?> deleteUserByUserName(@PathVariable("name") String name) {
        userService.deleteUserByUserName(name);
        return ResponseEntity.ok().body("User " + name + " is deleted");
    }


    /**
     * The method using the userService removes the concrete user from db by user id.
     *
     * @param id is the user name.
     * @return response with http status ok and the user in the body.
     */
    @PostMapping("id/{id}/delete")
    public ResponseEntity<?> delteUserByUserId(@PathVariable("id") Long id) {
        userService.deleteUserByUserId(id);
        return ResponseEntity.ok().body("User with id " + id + " is deleted");
    }


    /**
     * The method using the userService adds the concrete user to the db.
     *
     * @param name     is the user name.
     * @param password is the user password.
     * @param role     is the role role.
     * @return response with http status ok.
     */
    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestParam("name") String name, @RequestParam("password") String password, @RequestParam("role") List<String> role) {
        userService.addUser(name, password, role);
        return ResponseEntity.ok("New user is added");
    }

    /**
     * The method using the userService adds the new role to the concrete user.
     *
     * @param name is the user name.
     * @param role is the role name.
     * @return response with the http status ok and msg in the body.
     */
    @PostMapping("name/{name}/role/add/{role}")
    public ResponseEntity<String> addUserRole(@PathVariable("name") String name, @PathVariable("role") String role) {
        try {
            userService.addUserRole(name, role);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role not found");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role is already exist");
        }
        return ResponseEntity.ok("Role " + role + " is added for " + name + " user.");
    }

    /**
     * The method using the roleService adds the role to the db.
     *
     * @param role is the role name.
     * @return response with the http status ok and msg in the body.
     */
    @PostMapping("role/add/{role}")
    public ResponseEntity<?> addRole(@PathVariable("role") String role) {
        try {
            roleService.addRole(role);
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role " + role + " is allready exsist");
        }
        return ResponseEntity.ok().body("Role " + role + " is added");
    }

    /**
     * The method using the roleService retrieves all roles from db.
     *
     * @return response with http status ok and the list of the roles in the body.
     */
    @GetMapping("role/")
    public ResponseEntity<Iterable<RoleEntity>> getAllRoles() {
        return ResponseEntity.ok().body(roleService.getAllRoles());
    }

    /**
     * The method using the userService removes the concrete role from db by role name.
     *
     * @param role is role name.
     * @return response with http status ok and the msg in the body.
     */
    @PostMapping("role/delete/{role}")
    public ResponseEntity<?> deleteRole(@PathVariable("role") String role) {

        try {
            roleService.deleteRole(role);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role " + role + " is not found");
        }
        return ResponseEntity.ok().body("Role " + role + " is deleted");
    }

    /**
     * The method using the userService remove the role form the concrete user.
     *
     * @param name is the user name.
     * @param role is the role name.
     * @return response with the http status ok and msg in the body.
     */
    @PostMapping("name/{name}/role/delete/{role}")
    public ResponseEntity<String> deleteUserRole(@PathVariable("name") String name, @PathVariable("role") String role) {
        try {
            userService.deleteUserRole(name, role);
        } catch (RoleNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role not found");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        return ResponseEntity.ok("Role " + role + " is deleted from " + name + " user.");
    }

}
