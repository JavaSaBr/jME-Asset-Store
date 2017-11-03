package com.jme.asset.store.security;

import com.jme.asset.store.controller.UserController;
import com.jme.asset.store.filter.AuthenticationTokenProcessingFilter;
import com.jme.asset.store.filter.CsrfHeaderFilter;
import com.jme.asset.store.service.AccessTokenService;
import com.jme.asset.store.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfFilter;

/**
 * The security configuration.
 *
 * @author Alex Brui
 */
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    /**
     * The user service.
     */
    @NotNull
    private final UserService userService;

    /**
     * The authenticationProvider provider.
     */
    @NotNull
    private final AuthenticationProvider jdbcAuthenticationProvider;

    /**
     * The access token service.
     */
    @NotNull
    private final AccessTokenService accessTokenService;

    @Autowired
    public SecurityConfiguration(@NotNull final UserService userService,
                                 @NotNull final AuthenticationProvider jdbcAuthenticationProvider,
                                 @NotNull final AccessTokenService accessTokenService) {
        this.userService = userService;
        this.jdbcAuthenticationProvider = jdbcAuthenticationProvider;
        this.accessTokenService = accessTokenService;
    }

    @Override
    public void configure(final WebSecurity web) throws Exception {
        super.configure(web);
        web.ignoring()
                .antMatchers("/index.html", "/")
                .antMatchers("/inline.bundle.js", "/polyfills.bundle.js", "/styles.bundle.js")
                .antMatchers("/main.bundle.js", "/vendor.bundle.js", "/favicon.ico",
                        "/JMonkeyAssetStoreLogo.png", "/JMonkeyAssetStoreLogo-01.png")
                .antMatchers(HttpMethod.POST, UserController.API_REGISTER + "/**")
                .antMatchers(HttpMethod.POST, UserController.API_AUTHORIZATION + "/**");
    }

    @Override
    protected void configure(@NotNull final HttpSecurity http) throws Exception {
        http.httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers("/index.html", "/").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(new AuthenticationTokenProcessingFilter(accessTokenService, userService), CsrfFilter.class)
                .addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class)
                .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }

    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        super.configure(auth);
        auth.userDetailsService(userService);
        auth.authenticationProvider(jdbcAuthenticationProvider);
    }

    @Override
    @Bean("authenticationManager")
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}