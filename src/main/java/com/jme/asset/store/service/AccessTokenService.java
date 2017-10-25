package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.token.AccessTokenEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.transaction.annotation.Transactional;

/**
 * The service to work with access tokens.
 *
 * @author Alex Brui
 */
public interface AccessTokenService {

    /**
     * Gets a last access token for the user.
     *
     * @param user the user.
     * @return the last access token or null.
     */
    @Nullable AccessTokenEntity getLastToken(@NotNull UserEntity user);

    /**
     * Creates a new access token for the user.
     *
     * @param user the user.
     * @return the new access token.
     */
    @NotNull AccessTokenEntity createNewToken(@NotNull UserEntity user);

    /**
     * Finds an user entity by the token value.
     *
     * @param token the token value.
     * @return the user entity or null.
     */
    @Transactional
    @Nullable UserEntity findUserByToken(@NotNull String token);
}
