package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetEntity;
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
     * @param assetName the asset name
     * @return the asset
     */
    AssetEntity findByName(String assetName);
}
