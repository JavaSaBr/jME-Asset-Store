package com.jme.asset.store.db.repository;

import com.jme.asset.store.db.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByName(String username);

    void deleteByName(String name);
}
