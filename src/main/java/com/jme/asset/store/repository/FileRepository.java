package com.jme.asset.store.repository;

import com.jme.asset.store.entity.FileEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * The File repository
 *
 * @author Gomanchuk Mikhail
 */
public interface FileRepository extends PagingAndSortingRepository<FileEntity, Long> {
}
