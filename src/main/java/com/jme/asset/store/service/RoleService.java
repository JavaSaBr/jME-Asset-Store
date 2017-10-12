package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;

public interface RoleService {

    public void addRole(String name) throws RoleAlreadyExistException;

    public RoleEntity getRole(String name);

    public void deleteRole(String name) throws RoleNotFoundException;

    public Iterable <RoleEntity> getAllRoles();
}
