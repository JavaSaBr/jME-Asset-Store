package com.jme.asset.store.service;

import com.jme.asset.store.entity.AssetEntity;
import com.jme.asset.store.entity.FileEntity;
import com.jme.asset.store.entity.UserEntity;

import java.io.InputStream;

/**
 * The Asset service interface
 *
 * @author Yunkevich Andrei
 */
public interface AssetService {
    /**
     * Create File
     *
     * @param fileName    file name
     * @param userEntity  user
     * @param inputStream input stream
     */
    void createFile(String fileName, UserEntity userEntity, InputStream inputStream);

    /**
     * Create Asset
     *
     * @param assetName   asset name
     * @param description description asset
     * @param userEntity  user
     */
    void createAssetEntity(String assetName, String description, UserEntity userEntity);

    /**
     * Add file to asset
     *
     * @param file  The file entity file
     * @param asset the asset entity asset
     */
    void addFileToAsset(FileEntity file, AssetEntity asset);

    /**
     * Remove file from asset
     *
     * @param file  The file entity file
     * @param asset the asset entity asset
     * @return the result of removing file from asset
     */
    boolean removeFileFromAsset(FileEntity file, AssetEntity asset);
}
