package com.jme.asset.store.controller;

import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.service.RolesService;
import com.jme.asset.store.service.UserService;
import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(value = "/addUser")
    public ResponseEntity<?> addUser(@RequestParam("user_name") String userName, @RequestParam("user_password") String userPassword){

            userService.addUser(new UserEntity(userName,userPassword));
            return ResponseEntity.ok("Adding success");

        /*catch (ConstraintViolationException e) {
            return new ResponseEntity<>("Not unique name", HttpStatus.BAD_REQUEST);
        }
        catch (DataIntegrityViolationException ex){
            return new ResponseEntity<>("DataIntegrityViolationException", HttpStatus.BAD_REQUEST);
        }
        catch (MySQLIntegrityConstraintViolationException e) {
            return new ResponseEntity<>("MySQLIntegrityConstraintViolationException", HttpStatus.BAD_REQUEST);
        }*/

    }

    @GetMapping(value = "/allUsers")
    public ResponseEntity<?> allUsers(){
        return ResponseEntity.ok(userService.allUsers());
    }

    @PostMapping(value = "/delById")
    public ResponseEntity<?> delById(@RequestParam("id") long id){
        userService.deleteByID(id);
        return ResponseEntity.ok("");
    }

    @GetMapping(value = "/getByName")
    public ResponseEntity<?> getUserByName(@RequestParam("name") String name){
        return ResponseEntity.ok(userService.getUserByName(name));
    }

    @PostMapping(value = "/delByName")
    public ResponseEntity<?> delByName(@RequestParam("name") String name){
        userService.deleteByName(name);
        return ResponseEntity.ok("");
    }
}
