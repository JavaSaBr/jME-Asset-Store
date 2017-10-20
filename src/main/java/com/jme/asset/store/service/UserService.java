package com.jme.asset.store.service;

import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;

import javax.swing.text.StyledEditorKit;
import java.util.List;
import java.util.Optional;

public interface UserService {
    void addUser(String login, String password,String mail,
                        String firstName, String lastName, String middleName, List<RoleEntity> roleEntities );

    Optional<UserEntity> findById(Long id);

    UserEntity findByLogin(String login);

    List<UserEntity> getAllUser();

    void removeById(Long id);

    void removeByLogin(String login);

    boolean addRoleToUser(String login, String role);

    boolean removeRoleFromUser(String login, String role);

}
