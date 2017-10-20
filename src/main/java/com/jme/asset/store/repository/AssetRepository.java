package com.jme.asset.store.repository;

import com.jme.asset.store.entity.AssetEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AssetRepository extends PagingAndSortingRepository<AssetEntity, Long> {
    AssetEntity findByName(String name);

}
