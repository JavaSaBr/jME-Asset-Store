package com.jme.asset.store.controller;

import static org.springframework.http.ResponseEntity.*;

import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.UserCredentialsParams;
import com.jme.asset.store.controller.params.UserRegisterParams;
import com.jme.asset.store.controller.response.ErrorResponse;
import com.jme.asset.store.db.entity.token.AccessTokenEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.AccessTokenService;
import com.jme.asset.store.service.RoleService;
import com.jme.asset.store.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * The User controller provides set of endpoints to work with users.
 *
 * @author Alena Solonevich
 */
@Controller
@RequestMapping("/" + Routes.API_USERS)
public class UserController {

    public static final String API_REGISTER = "/" + Routes.API_USERS + "/register";
    public static final String API_AUTHORIZATION = "/" + Routes.API_USERS + "/authorization";

    /**
     * The user service.
     */
    @NotNull
    private final UserService userService;

    /**
     * The authentication manager.
     */
    @NotNull
    private final AuthenticationManager authenticationManager;

    /**
     * The access token service.
     */
    @NotNull
    private final AccessTokenService accessTokenService;

    @Autowired
    public UserController(@NotNull final UserService userService,
                          @NotNull final AuthenticationManager authenticationManager,
                          @NotNull final AccessTokenService accessTokenService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.accessTokenService = accessTokenService;
    }

    /**
     * Register the user by user registration params
     *
     * @param userParams the user registration params
     * @return OK if the registration is successfully, else BAD_REQUEST
     */
    @PostMapping(value = "/register")
    public ResponseEntity<?> register(@RequestBody final UserRegisterParams userParams) {

        final String login = userParams.getLogin();
        final String password = userParams.getPassword();
        final List<String> roles = userParams.getRoles();

        if (login == null || password == null || roles == null) {
            return status(HttpStatus.BAD_REQUEST).body("The fields login, password and role couldn't be null!");
        }

        final String firstName = userParams.getFirstName();
        final String middleName = userParams.getMiddleName();
        final String lastName = userParams.getLastName();
        final String mail = userParams.getMail();
        try {
            userService.create(UserEntity.class, login, password, roles, user -> {
                user.setFirstName(firstName);
                user.setMiddleName(middleName);
                user.setMail(mail);
                user.setLastName(lastName);
            });
        } catch (final RuntimeException e) {
            return status(HttpStatus.CONFLICT).body(new ErrorResponse(e.getLocalizedMessage()));
        }

        return ok("User is registered!");
    }

    /**
     * Authorize the user by user credentials params.
     *
     * @param params the user credentials params.
     * @return OK if the authorisation is successfully, else BAD_REQUEST.
     */
    @PostMapping(value = "/authorization",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)

    public ResponseEntity<?> authorization(@RequestBody final UserCredentialsParams params) {

        final String userName = params.getLogin();
        final String password = params.getPassword();
        if (userName == null || password == null) {
            return badRequest().body("Please, check the fields login, password, they couldn't be null !");
        }

        final Authentication authenticationToken =
                new UsernamePasswordAuthenticationToken(params.getLogin(), params.getPassword());
        final Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(authenticationToken);
        } catch (final UsernameNotFoundException e) {
            return status(HttpStatus.NOT_FOUND).body(new ErrorResponse(e.getLocalizedMessage()));
        } catch (final BadCredentialsException e) {
            return badRequest().body(new ErrorResponse(e.getLocalizedMessage()));
        }

        final Object principal = authentication.getPrincipal();
        if (!(principal instanceof JmeUser)) {
            return badRequest().body("Can't authenticate the user " + params.getLogin());
        }

        final SecurityContext securityContext = SecurityContextHolder.getContext();
        securityContext.setAuthentication(authentication);

        final JmeUser jmeUser = (JmeUser) principal;
        final AccessTokenEntity newToken = accessTokenService.createNewToken(jmeUser.getUser());
        final ArrayNode roles = JsonNodeFactory.instance.arrayNode();

        final Collection<GrantedAuthority> authorities = jmeUser.getAuthorities();
        authorities.forEach(authority -> roles.add(authority.getAuthority()));

        final ObjectNode objectNode = JsonNodeFactory.instance.objectNode();
        objectNode.put("token", newToken.getToken());
        objectNode.set("roles", roles);

        return ok(objectNode.toString());
    }
}
