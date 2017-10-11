package com.jme.asset.store.controller;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.data.repository.RoleRepository;
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

import javax.naming.NamingEnumeration;
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
     *  Return all users from db
     *
     * @return the list of users
     */
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getUserByName(@PathVariable("name")String name){
        return ResponseEntity.ok().body(userService.findUserByUserName(name));
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id){

        return ResponseEntity.ok(userService.findUserById(id));
    }

    @PostMapping("name/{name}/delete")
    public ResponseEntity<?> deleteUserByUserName(@PathVariable("name") String name){
        userService.deleteUserByUserName(name);
        return ResponseEntity.ok().body("User " + name + " is deleted");
    }

    @PostMapping("id/{id}/delete")
    public ResponseEntity<?> delteUserByUserId(@PathVariable("id") Long id){
        userService.deleteUserByUserId(id);
        return ResponseEntity.ok().body("User with id " + id + " is deleted");
    }

    /**
     * Add new User to db
     *
     * @param name is the user name.
     * @param password is the user password.
     * @param role is the user role.
     * @return http ok with msg.
     */
    @PostMapping("/add")
    public ResponseEntity<String> addUser(@RequestParam("name") String name, @RequestParam("password") String password, @RequestParam("role") List<String> role) {
        userService.addUser(name, password, role);
        return ResponseEntity.ok("New user is added");
    }

    /**
     * Add the role to the user.
     * @param name is the user name.
     * @param role is the role.
     * @return http ok and msg
     * @exception RoleAlreadyExistException
     * @exception UserNotFoundException
     * @exception RoleNotFoundException
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

    @PostMapping("role/add/{role}")
        public ResponseEntity<?> addRole(@PathVariable("role") String role ){
        try {
            roleService.addRole(role);
        } catch (RoleAlreadyExistException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Role " + role + " is allready exsist");
        }
        return ResponseEntity.ok().body("Role " + role + " is added");
        }

        @GetMapping("role/")
        public ResponseEntity<Iterable<RoleEntity>> getAllRoles(){
            return ResponseEntity.ok().body(roleService.getAllRoles());
        }

        @PostMapping("role/delete/{role}")
        public ResponseEntity<?> deleteRole(@PathVariable("role") String role){
         try {
             roleService.deleteRole(role);
         } catch (RoleNotFoundException e) {
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role " + role + " is not found");
         }
         return ResponseEntity.ok().body("Role " + role + " is delted");
     }

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
