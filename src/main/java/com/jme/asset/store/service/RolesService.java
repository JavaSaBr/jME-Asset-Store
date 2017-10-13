package com.jme.asset.store.service;

import com.jme.asset.store.entity.RolesEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface RolesService {

    void addRole(final String name);

    RolesEntity roleByName(final String name);

    boolean addRoleToUser(final String userName, final String roleName);

    List<RolesEntity> allRoles();

    boolean deleteRoleFromUser(final String userName, final String roleName);

    boolean deleteRoleByName(final String roleName);
}
