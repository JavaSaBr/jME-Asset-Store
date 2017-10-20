package com.jme.asset.store.service;

import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.RoleRepository;
import com.jme.asset.store.repository.UserRepository;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;


    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public Optional<UserEntity> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public void addUser(String login, String password, String mail, String firstName, String lastName, String middleName, List<RoleEntity> roleEntities) {
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
    public UserEntity findByLogin(String login) {
        Optional<UserEntity> optional = Optional.ofNullable(userRepository.findByLogin(login));
        return optional.orElse(null);
    }

    @Override
    public List<UserEntity> getAllUser() {
        return (List<UserEntity>) userRepository.findAll();
    }

    @Override
    public void removeById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void removeByLogin(String login) {
        userRepository.removeByLogin(login);

    }

    @Override
    public boolean isAddRoleToUser(String login, String role) {
        UserEntity userEntity = userRepository.findByLogin(login);
        RoleEntity roleEntity = roleRepository.findByName(role);
        if (userEntity == null || roleEntity == null) {
            throw new NoSuchElementException("no such role to user");
        }
        if (!userEntity.addRole(roleEntity)) {
            return false;
        }
        userRepository.save(userEntity);
        return true;
    }

    @Override
    public boolean isRemoveRoleFromUser(String login, String role) {
        UserEntity userEntity = userRepository.findByLogin(login);
        RoleEntity rolesEntity = roleRepository.findByName(role);
        if (userEntity == null || rolesEntity == null) throw new NoSuchElementException("No such role or user");
        if (!userEntity.removeRole(rolesEntity)) {
            return false;
        }
        userRepository.save(userEntity);
        return true;
    }

}
