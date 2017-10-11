package com.jme.asset.store.service;

import com.jme.asset.store.data.entity.RoleEntity;
import com.jme.asset.store.data.repository.RoleRepository;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoleServiceImpl implements RoleService{

    @Autowired
    private RoleRepository roleRepository;

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
        return roleRepository.findByName(name);
    }

    @Override
    @Transactional
    public void deleteRole(String name)throws RoleNotFoundException {
        roleRepository.deleteByName(name);
    }

    @Override
    public Iterable<RoleEntity> getAllRoles() {
        return roleRepository.findAll();
    }
}
