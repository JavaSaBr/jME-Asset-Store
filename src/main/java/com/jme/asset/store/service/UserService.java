package com.jme.asset.store.service;

<<<<<<< HEAD
import com.jme.asset.store.db.entity.UserEntity;

=======
import com.jme.asset.store.entity.RoleEntity;
import com.jme.asset.store.entity.UserEntity;

import javax.swing.text.StyledEditorKit;
>>>>>>> basic_services
import java.util.List;
import java.util.Optional;

public interface UserService {
<<<<<<< HEAD

    void addUser(UserEntity userEntity) ;

    Optional<UserEntity> findById(Long id);

    UserEntity findByName(String name);
=======
    void addUser(String login, String password,String mail,
                        String firstName, String lastName, String middleName, List<RoleEntity> roleEntities );

    Optional<UserEntity> findById(Long id);

    UserEntity findByLogin(String login);
>>>>>>> basic_services

    List<UserEntity> getAllUser();

    void removeById(Long id);

<<<<<<< HEAD
    void removeByName(String name);
=======
    void removeByLogin(String login);

    boolean addRoleToUser(String login, String role);

    boolean removeRoleFromUser(String login, String role);
>>>>>>> basic_services

}
