package com.jme.asset.store.service.impl;

import com.jme.asset.store.db.entity.user.RoleEntity;
import com.jme.asset.store.db.repository.user.RoleRepository;
import com.jme.asset.store.service.RoleService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.PersistenceException;
import java.util.Objects;

/**
 * THe main implementation of the role service.
 *
 * @author Alex Brui
 */
@Transactional
@Component("roleService")
public class RoleServiceImpl implements RoleService {

    @NotNull
    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(@NotNull final RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public @NotNull RoleEntity getOrCreateRole(@NotNull final String name) {

        RoleEntity entity = roleRepository.findByName(name);

        if (entity == null) {
            entity = new RoleEntity();
            entity.setName(name);
            try {
                roleRepository.save(entity);
            } catch (final PersistenceException e) {
                entity = roleRepository.findByName(name);
            }
        }

        return Objects.requireNonNull(entity, "Not found a role.");
    }
}
