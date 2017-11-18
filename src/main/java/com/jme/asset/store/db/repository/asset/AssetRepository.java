package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

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

    /**
     * find all assets by creator_id
     * @param id id of creator
     * @return list of creator's assets
     */
    List<AssetEntity> findAllByCreator_Id(long id);


}
