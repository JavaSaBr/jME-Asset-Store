package com.jme.asset.store.db.repository;

import com.jme.asset.store.db.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotNull;

public interface UserRepository extends PagingAndSortingRepository<UserEntity,Long> {

}
