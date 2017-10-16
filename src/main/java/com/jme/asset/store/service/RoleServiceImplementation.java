package com.jme.asset.store.service;

import com.jme.asset.store.controller.Exception.RoleNotFoundException;
import com.jme.asset.store.database.entity.role.RoleEntity;
import com.jme.asset.store.database.entity.user.UserEntity;
import com.jme.asset.store.database.repository.RoleRepository;
import com.jme.asset.store.database.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("roleService")
public class RoleServiceImplementation implements RoleService {

    private final RoleRepository roleRepository;

    private final UserRepository userRepository;

    @Autowired
    public RoleServiceImplementation(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @Override
    public RoleEntity addRole(final String name) {
        return roleRepository.save(new RoleEntity(name));
    }

    @Override
    public List<RoleEntity> allRoles() {
        return (List) roleRepository.findAll();
    }

    @Override
    public RoleEntity find(final String name) {
        final Optional<RoleEntity> opt = roleRepository.findByName(name);
        if (!opt.isPresent()) throw new RoleNotFoundException();
        return opt.get();
    }

    @Override
    public void delete(final String name) {
        final Optional<RoleEntity> opt = roleRepository.findByName(name);
        if (!opt.isPresent()) throw new RoleNotFoundException();
        final RoleEntity roleEntity = opt.get();
        List<UserEntity> users = userRepository.findAllByRoles(roleEntity);
        for (UserEntity user : users) {
            user.getRoles().remove(roleEntity);
            userRepository.save(user);
        }
        roleRepository.delete(opt.get());
    }
}

