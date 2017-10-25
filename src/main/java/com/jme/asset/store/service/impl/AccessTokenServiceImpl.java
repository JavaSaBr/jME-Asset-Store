package com.jme.asset.store.service.impl;

import static java.time.ZonedDateTime.now;
import com.jme.asset.store.db.entity.token.AccessTokenEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.db.repository.token.AccessTokenRepository;
import com.jme.asset.store.db.repository.user.UserRepository;
import com.jme.asset.store.service.AccessTokenService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.crypto.MacProvider;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.security.Key;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Optional;

/**
 * The main implementation of the access token service.
 *
 * @author Alex Brui
 */
@Transactional
@Component("accessTokenService")
public class AccessTokenServiceImpl implements AccessTokenService {

    private static final int ACCESS_TOKEN_HOURS = 4;

    /**
     * The access token repository.
     */
    @NotNull
    private final AccessTokenRepository accessTokenRepository;

    /**
     * The user repository.
     */
    @NotNull
    private final UserRepository userRepository;

    @Autowired
    public AccessTokenServiceImpl(@NotNull final AccessTokenRepository accessTokenRepository,
                                  @NotNull final UserRepository userRepository) {
        this.accessTokenRepository = accessTokenRepository;
        this.userRepository = userRepository;
    }

    @Override
    public @Nullable AccessTokenEntity getLastToken(@NotNull final UserEntity user) {
        return accessTokenRepository.findOneByUserIdOrderByExpiryDesc(user.getId());
    }

    @Override
    public @NotNull AccessTokenEntity createNewToken(@NotNull final UserEntity user) {

        final Key key = MacProvider.generateKey();
        final ZonedDateTime expiry = now().plusHours(ACCESS_TOKEN_HOURS);

        final String compactJws = Jwts.builder()
                .setSubject(user.getLogin())
                .setNotBefore(Date.from(expiry.toInstant()))
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();

        final AccessTokenEntity tokenEntity = new AccessTokenEntity();
        tokenEntity.setUserId(user.getId());
        tokenEntity.setExpiry(expiry);
        tokenEntity.setToken(compactJws);

        return accessTokenRepository.save(tokenEntity);
    }

    @Override
    @Transactional
    public @Nullable UserEntity findUserByToken(@NotNull final String token) {

        final AccessTokenEntity accessTokenEntity = accessTokenRepository.findOneByToken(token);

        if (accessTokenEntity == null) {
            return null;
        } else if (accessTokenEntity.isExpired()) {
            accessTokenRepository.delete(accessTokenEntity);
            return null;
        }

        final Optional<UserEntity> entity = userRepository.findById(accessTokenEntity.getUserId());
        return entity.orElse(null);
    }
}
