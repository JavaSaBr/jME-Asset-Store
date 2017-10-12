package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.RoleEntity;
import com.jme.asset.store.db.entity.UserEntity;
import com.jme.asset.store.db.repository.RoleRepository;
import com.jme.asset.store.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.naming.Name;
import java.util.List;
import java.util.NoSuchElementException;

@Service("roleService")
@Transactional
public class RoleServiceImpl implements RoleService {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public void addRole(RoleEntity roleEntity) {
        roleRepository.save(roleEntity);
    }

    @Override
    public void removeRole(String role) {
        roleRepository.removeByRole(role);
    }

    @Override
    public List<RoleEntity> getAllRole() {
        return roleRepository.findAll();
    }

    @Override
    public boolean addRoleToUser(String user_name, String role) {
        UserEntity userEntity = userRepository.findByName(user_name);
        RoleEntity roleEntity = roleRepository.findByRole(role);
        if (userEntity == null || roleEntity == null)
            throw new NoSuchElementException("no such role to user");
        if (userEntity.addRole(roleEntity)) {
            userRepository.save(userEntity);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteRoleFromUser(String user_name, String role_name) {
        UserEntity userEntity = userRepository.findByName(user_name);
        RoleEntity rolesEntity = roleRepository.findByRole(role_name);
        if (userEntity == null || rolesEntity == null) throw new NoSuchElementException("No such role or user");
        if (userEntity.removeRole(rolesEntity)) {
            userRepository.save(userEntity);
            return true;
        }
        return false;
    }
}
