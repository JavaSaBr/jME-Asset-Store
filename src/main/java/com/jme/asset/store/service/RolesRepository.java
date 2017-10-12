package com.jme.asset.store.service;

import com.jme.asset.store.entity.RolesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolesRepository extends JpaRepository<RolesEntity,Long> {
    Optional<RolesEntity> findByName(final String name);
}
