package com.jme.asset.store.service;

import com.jme.asset.store.entity.RolesEntity;
import com.jme.asset.store.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class RolesServiceImpl implements RolesService {

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean addRole(RolesEntity rolesEntity) {
        rolesRepository.save(rolesEntity);
        if(rolesRepository.findByName(rolesEntity.getName()).isPresent())
            return false;
        return true;
    }

    @Override
    public RolesEntity roleByName(String name) {
        Optional<RolesEntity> op = rolesRepository.findByName(name);
        if(op.isPresent()) return op.get();
        return null;
    }

    @Override
    public boolean addRoleToUser(String user_name, String role_name) throws NoSuchElementException {
        Optional<UserEntity> op_user = userRepository.findByName(user_name);
        Optional<RolesEntity> op_role = rolesRepository.findByName(role_name);
        if(!op_role.isPresent() || !op_user.isPresent()) throw  new NoSuchElementException("No such role or user");
        UserEntity user = op_user.get();
        RolesEntity role = op_role.get();
        if(user.addRole(role)){
            userRepository.save(user);
            return true;

        }
        return false;
    }

    @Override
    public List<RolesEntity> allRoles() {
        return rolesRepository.findAll();
    }

    @Override
    public boolean deleteRoleFromUser(String user_name, String role_name) {
        Optional<UserEntity> op_user = userRepository.findByName(user_name);
        Optional<RolesEntity> op_role = rolesRepository.findByName(role_name);
        if(!op_role.isPresent() || !op_user.isPresent()) throw  new NoSuchElementException("No such role or user");
        UserEntity user = op_user.get();
        RolesEntity role = op_role.get();
        if(user.delRole(role)){
            userRepository.save(user);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteRoleByName(String role_name) {
        Optional<RolesEntity> op_role = rolesRepository.findByName(role_name);
        if(op_role.isPresent()){
            RolesEntity role = op_role.get();
            rolesRepository.delete(role);
            return true;
        }
        return false;
    }


}
