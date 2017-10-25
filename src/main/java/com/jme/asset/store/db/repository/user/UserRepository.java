package com.jme.asset.store.db.repository.user;

import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The repository to work with user entities in DB.
 *
 * @author Denis Lesheniuk.
 */
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

    /**
     * Find a user by the login.
     *
     * @param login the user login.
     * @return the user or null.
     */
    @Nullable UserEntity findByLogin(@NotNull String login);

    /**
     * Remove the user by the user login.
     *
     * @param login the user login.
     */
    void removeByLogin(String login);
}
