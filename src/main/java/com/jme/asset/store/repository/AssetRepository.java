package com.jme.asset.store.repository;

import com.jme.asset.store.entity.AssetEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The Asset repository
 *
 * @author Gomanchuk Mikhail
 */
public interface AssetRepository extends PagingAndSortingRepository<AssetEntity, Long> {

    /**
     * Find asset by name
     *
     * @param assetName The asset name
     * @return The asset
     */
    AssetEntity findByName(String assetName);
}
