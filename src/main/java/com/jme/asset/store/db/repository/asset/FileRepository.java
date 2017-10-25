package com.jme.asset.store.db.repository.asset;

import com.jme.asset.store.db.entity.asset.FileEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The File repository
 *
 * @author Gomanchuk Mikhail
 */
public interface FileRepository extends PagingAndSortingRepository<FileEntity, Long> {
}
