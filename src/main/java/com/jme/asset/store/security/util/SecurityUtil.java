package com.jme.asset.store.security.util;

import com.jme.asset.store.security.JmeUser;
import org.jetbrains.annotations.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * The class with utility methods.
 *
 * @author Alex Brui
 */
public class SecurityUtil {

    /**
     * Gets the current jME user.
     *
     * @return the current jME user or null.
     */
    public static @Nullable JmeUser getCurrentUser() {


        final SecurityContext securityContext = SecurityContextHolder.getContext();
        final Authentication authentication = securityContext.getAuthentication();

        if (authentication == null) {
            return null;
        }

        final Object principal = authentication.getPrincipal();

        if (principal instanceof JmeUser) {
            return (JmeUser) principal;
        }

        return null;
    }
}
