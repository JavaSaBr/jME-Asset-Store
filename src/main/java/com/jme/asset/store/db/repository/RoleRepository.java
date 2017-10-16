package com.jme.asset.store.db.repository;

import com.jme.asset.store.db.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    void removeByRole(String role);

    RoleEntity findByRole(String role);
}
