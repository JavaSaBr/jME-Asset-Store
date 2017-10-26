package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The File types repository
 *
 * @author Gomanchuk Mikhail
 */
public interface FileTypeRepository extends PagingAndSortingRepository<FileTypeEntity, Long> {
}
