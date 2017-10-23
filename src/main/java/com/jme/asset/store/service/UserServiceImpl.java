package com.jme.asset.store.service;

import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.RoleRepository;
import com.jme.asset.store.repository.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void addUser(String login, String password, String mail, String firstName,
                        String lastName, String middleName, List<String> roles) {
        List<RoleEntity> roleEntities = new ArrayList<>();
        for (String s : roles) {
            roleEntities.add(roleRepository.findByName(s));
        }
        UserEntity userEntity = new UserEntity();
        userEntity.setLogin(login);
        userEntity.setPassword(DigestUtils.md2Hex(password));
        userEntity.setFirstName(firstName);
        userEntity.setLastName(lastName);
        userEntity.setMail(mail);
        userEntity.setMiddleName(middleName);
        userEntity.setRoles(roleEntities);
        userRepository.save(userEntity);
    }

    @Override
    public boolean addRoleToUser(String userName, String roleName) {
        UserEntity user = userRepository.findByLogin(userName);
        RoleEntity role = roleRepository.findByName(roleName);
        List<RoleEntity> roles = user.getRoles();
        if (user == null || role == null) {
            throw new NoSuchElementException("no such role to user");
        }
        if (user.getRoles().contains(role)) {
            return false;
        }
        roles.add(role);
        user.setRoles(roles);
        userRepository.save(user);
        return true;
    }

    @Override
    public boolean removeRoleFromUser(String userName, String roleName) {
        UserEntity user = userRepository.findByLogin(userName);
        RoleEntity role = roleRepository.findByName(roleName);
        if (user == null || role == null) {
            throw new NoSuchElementException("No such role or user");
        }
        if (user.getRoles().contains(role)) {
            return false;
        }
        List<RoleEntity> roles = user.getRoles();
        roles.remove(role);
        user.setRoles(roles);
        userRepository.save(user);
        return true;
    }
}
