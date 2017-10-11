package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.repository.RoleRepository;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.management.relation.RoleInfoNotFoundException;

@Service
public class RoleServiceImpl implements RoleService{

    @Autowired
    RoleRepository roleRepository;

    @Override
    public void addRole(String name)throws RoleAlreadyExistException {
        RoleEntity roleEntity = roleRepository.findByName(name);
        if(roleEntity == null)
            roleEntity = new RoleEntity(name);
        else
            throw new RoleAlreadyExistException(name);
        roleRepository.save(roleEntity);
    }

    @Override
    public RoleEntity getRole(String name) {
        RoleEntity roleEntity = roleRepository.findByName(name);
        return roleEntity;
    }

    @Override
    public void deleteRole(String name)throws RoleNotFoundException {
        RoleEntity roleEntity = roleRepository.findByName(name);
        if(roleEntity == null)
      throw  new RoleNotFoundException("name");
        roleRepository.delete(roleEntity);
    }
}
