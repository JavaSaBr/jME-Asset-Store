package com.jme.asset.store.service;


import com.jme.asset.store.database.entity.role.RoleEntity;

import java.util.List;

public interface RoleService {

    RoleEntity addRole(String name) ;

    List allRoles();

    RoleEntity findRole(String name) ;

    RoleEntity findRole(Long id);

    void deleteRole(String name);

    void deleteRole(Long id);


}
