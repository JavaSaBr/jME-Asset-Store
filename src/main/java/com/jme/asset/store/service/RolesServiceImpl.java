package com.jme.asset.store.service;

import com.jme.asset.store.entity.RolesEntity;
import com.jme.asset.store.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional
public class RolesServiceImpl implements RolesService {

    /**
     * The repository of roles.
     */
    private final RolesRepository rolesRepository;

    private final UserRepository userRepository;

    @Autowired
    public RolesServiceImpl(final RolesRepository rolesRepository, final UserRepository userRepository) {
        this.rolesRepository = rolesRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void addRole(final String name) {
        rolesRepository.save(new RolesEntity(name));
    }

    @Override
    public RolesEntity roleByName(final String name) {
        final Optional<RolesEntity> op = rolesRepository.findByName(name);
        return op.orElse(null);
    }

    @Override
    public boolean addRoleToUser(final String userName, final String roleName) throws NoSuchElementException {
        final Optional<UserEntity> op_user = userRepository.findByName(userName);
        final Optional<RolesEntity> op_role = rolesRepository.findByName(roleName);
        if (!op_role.isPresent() || !op_user.isPresent()) {
            throw new NoSuchElementException("No such role or user");
        }
        final UserEntity user = op_user.get();
        final RolesEntity role = op_role.get();
        if (!user.addRole(role)) return false;
        userRepository.save(user);
        return true;
    }

    @Override
    public List<RolesEntity> allRoles() {
        return rolesRepository.findAll();
    }

    @Override
    public boolean deleteRoleFromUser(final String userName, final String roleName) {
        final Optional<UserEntity> op_user = userRepository.findByName(userName);
        final Optional<RolesEntity> op_role = rolesRepository.findByName(roleName);
        if (!op_role.isPresent() || !op_user.isPresent()) {
            throw new NoSuchElementException("No such role or user");
        }
        final UserEntity user = op_user.get();
        final RolesEntity role = op_role.get();
        if (!user.delete(role)) {
            return false;
        }
        userRepository.save(user);
        return true;
    }

    @Override
    public boolean deleteRoleByName(final String roleName) {
        final Optional<RolesEntity> op_role = rolesRepository.findByName(roleName);
        if (!op_role.isPresent()) return false;
        final RolesEntity role = op_role.get();
        rolesRepository.delete(role);
        return true;
    }
}
