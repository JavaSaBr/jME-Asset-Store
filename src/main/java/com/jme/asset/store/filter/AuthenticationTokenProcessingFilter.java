package com.jme.asset.store.filter;

import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.AccessTokenService;
import com.jme.asset.store.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * The implementation of a filter to check access token in all requests.
 *
 * @author Alex Brui
 */
public class AuthenticationTokenProcessingFilter extends GenericFilterBean {

    /**
     * The access token service.
     */
    @NotNull
    private final AccessTokenService accessTokenService;

    /**
     * The user service.
     */
    @NotNull
    private final UserService userService;

    public AuthenticationTokenProcessingFilter(@NotNull final AccessTokenService accessTokenService,
                                               @NotNull final UserService userService) {
        this.accessTokenService = accessTokenService;
        this.userService = userService;
    }

    @Override
    public void doFilter(@NotNull final ServletRequest servletRequest, @NotNull final ServletResponse servletResponse,
                         @NotNull final FilterChain filterChain) throws IOException, ServletException {

        final HttpServletRequest httpRequest = getAsHttpRequest(servletRequest);
        final String accessToken = extractAuthTokenFromRequest(httpRequest);
        final UserEntity user = accessToken == null ? null : accessTokenService.findUserByToken(accessToken);

        if (user != null) {

            final JmeUser jmeUser = userService.loadUserByUsername(user.getLogin());
            final UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(jmeUser, null, jmeUser.getAuthorities());

            final SecurityContext context = SecurityContextHolder.getContext();
            context.setAuthentication(authentication);
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }

    /**
     * Converts the servlet request to HTTP request.
     *
     * @param request the servlet request.
     * @return the http request.
     */
    private @NotNull HttpServletRequest getAsHttpRequest(@NotNull final ServletRequest request) {

        if (!(request instanceof HttpServletRequest)) {
            throw new RuntimeException("Expecting an HTTP request");
        }

        return (HttpServletRequest) request;
    }

    /**
     * Try to extract the token value from the request.
     *
     * @param httpRequest the http request.
     * @return the token value or null.
     */
    private @Nullable String extractAuthTokenFromRequest(@NotNull final HttpServletRequest httpRequest) {

        /* Get token from header */
        String authToken = httpRequest.getHeader("X-Access-Token");

		/* If token not found get it from request parameter */
        if (authToken == null) {
            authToken = httpRequest.getParameter("token");
        }

        return authToken;
    }
}
