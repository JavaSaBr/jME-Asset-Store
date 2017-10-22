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
     * @param fileName    The file name
     * @param userEntity  The user
     * @param inputStream The input stream
     */
    void createFile(String fileName, UserEntity userEntity, InputStream inputStream);

    /**
     * Create Asset
     *
     * @param assetName   The asset name
     * @param description The description asset
     * @param userEntity  The user
     */
    void createAssetEntity(String assetName, String description, UserEntity userEntity);

    /**
     * Add file to asset
     *
     * @param file  The file entity file
     * @param asset The asset entity asset
     */
    void addFileToAsset(FileEntity file, AssetEntity asset);

    /**
     * Remove file from asset
     *
     * @param file  The file entity file
     * @param asset The asset entity asset
     * @return The result of removing file from asset
     */
    boolean isRemoveFileFromAsset(FileEntity file, AssetEntity asset);
}
