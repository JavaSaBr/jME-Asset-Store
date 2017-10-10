package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import org.springframework.http.ResponseEntity;

public interface RoleService {
    public ResponseEntity<?> addRole(String name);
    public ResponseEntity<?> removeRole(String name);
    public RoleEntity getRole(String name);
}
