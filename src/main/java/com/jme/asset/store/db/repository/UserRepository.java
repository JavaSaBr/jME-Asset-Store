package com.jme.asset.store.db.repository;

import com.jme.asset.store.db.entity.RoleEntity;
import com.jme.asset.store.db.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotNull;
import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByName(String username);

    void deleteByName(String name);

    List<RoleEntity> getByRoles(String name);

}
