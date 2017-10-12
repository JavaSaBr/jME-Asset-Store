package com.jme.asset.store.service;

import com.jme.asset.store.controller.Exception.RoleNotFoundException;
import com.jme.asset.store.database.entity.role.RoleEntity;
import com.jme.asset.store.database.entity.user.UserEntity;
import com.jme.asset.store.database.repository.RoleRepository;
import com.jme.asset.store.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("roleService")
public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public RoleEntity addRole(String name) {
        return roleRepository.save(new RoleEntity(name));
    }

    @Override
    public List allRoles() {
        return (List) roleRepository.findAll();
    }

    @Override
    public RoleEntity findRole(String name) {
        Optional<RoleEntity> opt = roleRepository.findByName(name);
        if (!opt.isPresent()) throw new RoleNotFoundException();
        return opt.get();
    }

    @Override
    public RoleEntity findRole(Long id) {
        Optional<RoleEntity> opt = roleRepository.findById(id);
        if (opt.isPresent()) throw new RoleNotFoundException();
        return opt.get();
    }

    @Override
    public void deleteRole(String name) {
        Optional<RoleEntity> opt = roleRepository.findByName(name);
        if (!opt.isPresent()) throw new RoleNotFoundException();
        RoleEntity roleEntity = opt.get();
        List<UserEntity> users = userRepository.findAllByRoles(roleEntity);
        for (UserEntity user : users) {
            user.getRoles().remove(roleEntity);
            userRepository.save(user);
        }
        roleRepository.delete(opt.get());
    }

    @Override
    public void deleteRole(Long id) {
        Optional<RoleEntity> opt = roleRepository.findById(id);
        if (opt.isPresent())
            roleRepository.delete(opt.get());
    }

}

