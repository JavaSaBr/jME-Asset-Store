package com.jme.asset.store.controller;

import com.jme.asset.store.controller.params.UserParams;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.service.RoleService;
import com.jme.asset.store.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

/**
 * The User controller provides set of endpoints for working with User
 *
 * @author Alena Solonevich
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @NotNull
    private final UserService userService;

    @Autowired
    public UserController(@NotNull final UserService userService) {
        this.userService = userService;
    }

    /**
     * Register the user by user params
     *
     * @param userParams the user params
     * @return OK if the registration is successfully, else BAD_REQUEST
     */
    @PostMapping(value = "/register")
    public ResponseEntity<?> register(@RequestBody final UserParams userParams) {
        final String login = userParams.getLogin();
        if (login == null) {
            return ResponseEntity.badRequest().body("The field login couldn't be null");
        }
        final String password = userParams.getPassword();
        if (password == null) {
            return ResponseEntity.badRequest().body("The field password couldn't be null");
        }
        final String firstName = userParams.getFirstName();
        final String middleName = userParams.getMiddleName();
        final String lastName = userParams.getLastName();
        final String mail = userParams.getMail();
        final List<String> roles = new ArrayList();
        roles.add(RoleService.USER_ROLE);
        try {
            userService.addUser(login, password, mail, firstName, middleName, lastName, roles);
        } catch (final RuntimeException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Please, check parameters!");
        }
        return ResponseEntity.ok("User is registered!");
    }

    /**
     * Authorize the user by user params
     *
     * @param userParams the user params
     * @return OK if the authorisation is successfully, else BAD_REQUEST
     */
    @PostMapping(value = "/authorization")
    public ResponseEntity<?> authorization(@RequestBody final UserParams userParams) {
        final String login = userParams.getLogin();
        final String password = userParams.getPassword();
        final UserEntity user = userService.authenticate(login, password);
        if (user == null) {
            return ResponseEntity.badRequest().body("Incorrect login or password!");
        }
        return ResponseEntity.ok("The user authorized");
    }
}
