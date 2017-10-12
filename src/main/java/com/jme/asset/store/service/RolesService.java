package com.jme.asset.store.service;

import com.jme.asset.store.entity.RolesEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RolesService {
    boolean addRole(RolesEntity rolesEntity);
    RolesEntity roleByName(String name);
    boolean addRoleToUser(String user_name, String role_name);
    List<RolesEntity> allRoles();
    boolean deleteRoleFromUser(String user_name, String role_name);
    boolean deleteRoleByName(String role_name);
}
