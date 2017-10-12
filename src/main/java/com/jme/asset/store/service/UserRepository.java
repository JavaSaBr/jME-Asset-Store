package com.jme.asset.store.service;

import com.jme.asset.store.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByName(final String name);
    Optional<UserEntity> deleteByName(final String name);
}