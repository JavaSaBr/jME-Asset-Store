package com.jme.asset.store.service;

import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.RoleRepository;
import com.jme.asset.store.repository.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.jetbrains.annotations.NotNull;
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
    public UserServiceImpl(final UserRepository userRepository, final RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void addUser(@NotNull final String login, @NotNull final String password, final String mail, final String firstName,
                        final String lastName, final String middleName, final List<String> roles) {
        final List<RoleEntity> roleEntities = new ArrayList<>();
        for (String role : roles) {
            roleEntities.add(roleRepository.findByName(role));
        }
        final UserEntity userEntity = new UserEntity();
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
    public void addRoleToUser(@NotNull final String userName, @NotNull final String roleName) {
        final UserEntity user = userRepository.findByLogin(userName);
        final RoleEntity role = roleRepository.findByName(roleName);
        if (user == null || role == null) {
            throw new NoSuchElementException("no such role to user");
        }
        user.addRole(role);
        userRepository.save(user);
    }

    @Override
    public void removeRoleFromUser(@NotNull final String userName, @NotNull final String roleName) {
        final UserEntity user = userRepository.findByLogin(userName);
        final RoleEntity role = roleRepository.findByName(roleName);
        if (user == null || role == null) {
            throw new NoSuchElementException("No such role or user");
        }
        user.removeRole(role);
        userRepository.save(user);
    }
}
