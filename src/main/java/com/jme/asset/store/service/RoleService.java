package com.jme.asset.store.service;


import com.jme.asset.store.database.entity.role.RoleEntity;

import java.util.List;

public interface RoleService {

    RoleEntity addRole(String name) ;

    List<RoleEntity> allRoles();

    RoleEntity find(String name) ;

    void delete(String name);


}
