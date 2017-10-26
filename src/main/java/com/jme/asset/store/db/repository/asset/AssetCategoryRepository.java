package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The asset category repository
 *
 * @author Yunkevich Andrei
 */
public interface AssetCategoryRepository extends PagingAndSortingRepository<AssetCategoryEntity, Long> {

}
