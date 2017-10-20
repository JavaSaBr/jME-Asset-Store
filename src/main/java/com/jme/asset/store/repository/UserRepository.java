package com.jme.asset.store.repository;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The UserEntity repository.
 *
 * @author Denis Lesheniuk.
 */
public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {
    UserEntity findByLogin(String login);

    void removeByLogin(String login);
}
