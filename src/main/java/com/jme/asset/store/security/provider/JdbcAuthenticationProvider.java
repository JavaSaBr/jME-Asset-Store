package com.jme.asset.store.security.provider;

import com.jme.asset.store.AssetStoreApplication;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.UserService;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

/**
 * The JDBC authentication provider.
 *
 * @author Alex Brui
 */
@Service("jdbcAuthenticationProvider")
public class JdbcAuthenticationProvider implements AuthenticationProvider {

    /**
     * The application.
     */
    @NotNull
    private final AssetStoreApplication application;

    /**
     * The user service.
     */
    @NotNull
    private final UserService userService;

    @Autowired
    public JdbcAuthenticationProvider(@NotNull final AssetStoreApplication application,
                                      @NotNull final UserService userService) {
        this.application = application;
        this.userService = userService;
    }

    @Override
    public Authentication authenticate(@NotNull final Authentication authentication) throws AuthenticationException {

        final UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
        final String name = token.getName();
        final String credentials = (String) authentication.getCredentials();

        final String adminName = application.getUserAdminName();
        final String adminPassword = application.getUserAdminPassword();

        JmeUser jmeUser;

        if (StringUtils.equals(adminName, name) && StringUtils.equals(adminPassword, credentials)) {
            jmeUser = userService.loadAdminUser();
        } else {

            jmeUser = userService.loadUserByUsername(name);

            final String hashedPassword = DigestUtils.md2Hex(credentials);

            if (!jmeUser.getHashedPassword().equals(hashedPassword)) {
                throw new BadCredentialsException("Invalid the username or the password.");
            }
        }

        final UsernamePasswordAuthenticationToken result =
                new UsernamePasswordAuthenticationToken(jmeUser, jmeUser.getHashedPassword(), jmeUser.getAuthorities());
        result.setDetails(authentication.getDetails());

        return result;
    }

    @Override
    public boolean supports(@NotNull final Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
