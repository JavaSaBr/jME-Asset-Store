package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
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
     * Find all assets by creator.
     *
     * @param creator is th creator.
     * @return list of creator's assets
     */
    List<AssetEntity> findAllByCreator(UserEntity creator);

    /**
     * Find all assets by category_id
     *
     * @param id category id
     * @return list of category assets
     */
    List<AssetEntity> findAllByCategory_Id(long id);

}
