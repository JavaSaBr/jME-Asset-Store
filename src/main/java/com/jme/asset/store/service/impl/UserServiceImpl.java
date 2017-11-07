package com.jme.asset.store.service.impl;

import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;
import com.jme.asset.store.AssetStoreApplication;
import com.jme.asset.store.db.entity.user.AdminUserEntity;
import com.jme.asset.store.db.entity.user.RoleEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.db.repository.user.UserRepository;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.RoleService;
import com.jme.asset.store.service.UserService;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.function.Consumer;

/**
 * The main implementation of the user service.
 *
 * @author Yunkevich Andrei
 */
@Service
public class UserServiceImpl implements UserService {

    /**
     * The application.
     */
    @NotNull
    private final AssetStoreApplication application;

    /**
     * The entity manager.
     */
    @NotNull
    @PersistenceContext
    private final EntityManager entityManager;

    /**
     * THe user repository.
     */
    @NotNull
    private final UserRepository userRepository;

    /**
     * The role service.
     */
    @NotNull
    private final RoleService roleService;

    @Autowired
    public UserServiceImpl(@NotNull final AssetStoreApplication application,
                           @NotNull final UserRepository userRepository, @NotNull final RoleService roleService,
                           @NotNull final EntityManager entityManager) {
        this.application = application;
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.entityManager = entityManager;
    }

    @Override
    public @NotNull JmeUser loadUserByUsername(@NotNull final String username) throws UsernameNotFoundException {

        final UserEntity entity = userRepository.findByLogin(username);

        if (entity == null) {
            throw new UsernameNotFoundException("Not found a user for the name " + username);
        }

        return new JmeUser(entity.getLogin(), entity.getPassword(), new ArrayList<>(entity.getRoles()), entity);
    }

    @Override
    @Transactional
    public @NotNull JmeUser loadAdminUser() {

        final CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<AdminUserEntity> criteriaQuery = builder.createQuery(AdminUserEntity.class);
        criteriaQuery.select(criteriaQuery.from(AdminUserEntity.class));

        final TypedQuery<AdminUserEntity> typedQuery = entityManager.createQuery(criteriaQuery);
        typedQuery.setMaxResults(1);

        AdminUserEntity admin;
        try {
            admin = typedQuery.getSingleResult();
        } catch (final NoResultException e) {
            final List<String> roleNames = singletonList(RoleService.ADMIN_ROLE);
            admin = create(AdminUserEntity.class, application.getUserAdminName(), "", roleNames, null);
        }

        if (!StringUtils.equals(admin.getLogin(), application.getUserAdminName())) {
            admin.setLogin(application.getUserAdminName());
            userRepository.save(admin);
        }

        final List<RoleEntity> authorities = new ArrayList<>(admin.getRoles());
        return new JmeUser(admin.getLogin(), "", authorities, admin);
    }

    @Override
    public <T extends UserEntity> @NotNull T create(@NotNull final Class<T> type, @NotNull final String userName,
                                                    @NotNull final String password,
                                                    @NotNull final List<String> roleNames,
                                                    @Nullable final Consumer<T> setter) throws RuntimeException {

        final List<RoleEntity> roles = roleNames.stream()
                .map(roleService::getOrCreateRole)
                .collect(toList());

        final T entity;
        try {
            entity = type.getDeclaredConstructor().newInstance();
        } catch (final InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            throw new RuntimeException(e);
        }

        if (setter != null) {
            setter.accept(entity);
        }

        entity.setLogin(userName);
        entity.setPassword(DigestUtils.md2Hex(password));
        entity.setRoles(roles);

        userRepository.save(entity);

        return entity;
    }

    @Override
    public void addRoleToUser(@NotNull final String userName, @NotNull final String roleName) {

        final UserEntity user = userRepository.findByLogin(userName);
        if (user == null) {
            throw new NoSuchElementException("no found a user for the name " + userName);
        }

        user.addRole(roleService.getOrCreateRole(roleName));
        userRepository.save(user);
    }

    @Override
    public void removeRoleFromUser(@NotNull final String userName, @NotNull final String roleName) {

        final UserEntity user = userRepository.findByLogin(userName);
        if (user == null) {
            throw new NoSuchElementException("no found a user for the name " + userName);
        }

        user.removeRole(roleService.getOrCreateRole(roleName));
        userRepository.save(user);
    }

    @Override
    public UserEntity authenticate(final String login, final String password) {
       final  UserEntity user = userRepository.findByLogin(login);
        if (user != null && DigestUtils.md2Hex(password).equals(user.getPassword())) {
            return user;
        }
        return null;
    }

    @Override
    public @Nullable UserEntity load(final String login) {
        return userRepository.findByLogin(login);
    }

    @Override
    public @Nullable UserEntity load(final long id) {
        return userRepository.findById(id).orElse(null);
    }
}
