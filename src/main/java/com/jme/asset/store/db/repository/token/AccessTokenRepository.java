package com.jme.asset.store.db.repository.token;

import com.jme.asset.store.db.entity.token.AccessTokenEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The repository to work with {@link AccessTokenEntity} in DB.
 *
 * @author Alex Brui
 */
public interface AccessTokenRepository extends PagingAndSortingRepository<AccessTokenEntity, Long> {

    /**
     * Finds a last access token by the user id.
     *
     * @param userId the user id.
     * @return the access token entity or null.
     */
    @Nullable AccessTokenEntity findOneByUserIdOrderByExpiryDesc(long userId);

    /**
     * Finds an access token by the token value.
     *
     * @param token the token value.
     * @return the access token or null.
     */
    @Nullable AccessTokenEntity findOneByToken(@NotNull String token);
}
