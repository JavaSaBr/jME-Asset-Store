package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.RoleEntity;

import java.util.List;

public interface RoleService {
    void addRole(RoleEntity roleEntity);

    void removeRole(String role);

    List<RoleEntity> getAllRole();

    boolean addRoleToUser(String user_name, String role_name);

    boolean deleteRoleFromUser(String user_name, String role_name);


}
