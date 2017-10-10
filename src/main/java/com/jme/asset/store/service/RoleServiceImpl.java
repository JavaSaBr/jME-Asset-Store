package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService{

    @Autowired
    RoleRepository roleRepository;

    @Override
    public ResponseEntity<?> addRole(String name) {
        RoleEntity roleEntity = roleRepository.findByName(name);
        if(roleEntity == null)
            roleEntity = new RoleEntity(name);

        roleRepository.save(roleEntity);
        return ResponseEntity.ok("Role is added: " + name);
    }

    @Override
    public ResponseEntity<?> removeRole(String name) {
        RoleEntity roleEntity = roleRepository.findByName(name);
        if(roleEntity == null)
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role " + name + " is not exist" );

        roleRepository.delete(roleEntity);
        return ResponseEntity.status(HttpStatus.OK).body("Role " + name + " is removed");
    }

    @Override
    public RoleEntity getRole(String name) {
        RoleEntity roleEntity = roleRepository.findByName(name);
        return roleEntity;
    }
}
