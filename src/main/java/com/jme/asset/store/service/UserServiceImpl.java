package com.jme.asset.store.service;

<<<<<<< HEAD
import com.jme.asset.store.db.entity.UserEntity;
import com.jme.asset.store.db.repository.UserRepository;
=======
import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.RoleRepository;
import com.jme.asset.store.repository.UserRepository;
>>>>>>> basic_services
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.NoSuchElementException;
>>>>>>> basic_services
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
<<<<<<< HEAD

    private final UserRepository userRepository;


    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void addUser(UserEntity userEntity) {
=======
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository,RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void addUser(String login, String password,String mail,
                        String firstName, String lastName, String middleName, List<RoleEntity> roleEntities ) {
        UserEntity userEntity = new UserEntity();
        userEntity.setLogin(login);
        userEntity.setPassword(password);
        userEntity.setFirstName(firstName);
        userEntity.setLastName(lastName);
        userEntity.setMail(mail);
        userEntity.setMiddleName(middleName);
        userEntity.setRoles(roleEntities);
>>>>>>> basic_services
        userRepository.save(userEntity);
    }

    @Override
    public Optional<UserEntity> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
<<<<<<< HEAD
    public UserEntity findByName(String name) {
        Optional<UserEntity> optional = Optional.ofNullable(userRepository.findByName(name));
=======
    public UserEntity findByLogin(String login) {
        Optional<UserEntity> optional = Optional.ofNullable(userRepository.findByLogin(login));
>>>>>>> basic_services
        return optional.orElse(null);
    }

    @Override
    public List<UserEntity> getAllUser() {
<<<<<<< HEAD
        return userRepository.findAll();
=======
        return (List<UserEntity>) userRepository.findAll();
>>>>>>> basic_services
    }

    @Override
    public void removeById(Long id) {
        userRepository.deleteById(id);
<<<<<<< HEAD
    }

    @Override
    public void removeByName(String name) {
        userRepository.deleteByName(name);
    }

=======

    }

    @Override
    public void removeByLogin(String login) {
        userRepository.deleteByLogin(login);

    }
    @Override
    public boolean addRoleToUser(String login, String role) {
        UserEntity userEntity = userRepository.findByLogin(login);
        RoleEntity roleEntity = roleRepository.findByName(role);
        if (userEntity == null || roleEntity == null)
            throw new NoSuchElementException("no such role to user");
        if (userEntity.addRole(roleEntity)) {
            userRepository.save(userEntity);
            return true;
        }
        return false;
    }

    @Override
    public boolean removeRoleFromUser(String login, String role_name) {
        UserEntity userEntity = userRepository.findByLogin(login);
        RoleEntity rolesEntity = roleRepository.findByName(role_name);
        if (userEntity == null || rolesEntity == null) throw new NoSuchElementException("No such role or user");
        if (userEntity.removeRole(rolesEntity)) {
            userRepository.save(userEntity);
            return true;
        }
        return false;
    }
>>>>>>> basic_services
}
