package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * The asset category repository
 *
 * @author Yunkevich Andrei
 */
public interface AssetCategoryRepository extends PagingAndSortingRepository<AssetCategoryEntity, Long> {
    /**
     * Find all assets where asset parent is null
     *
     * @return list of assets
     */
    List<AssetCategoryEntity> findAllByParentIsNull();

    /**
     * Find all assets by assets parent
     *
     * @param id asset id
     * @return list of assets
     */
    List<AssetCategoryEntity> findAllByParentId(Long id);

}
