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
     * @param user        The user
     * @param inputStream The input stream
     */
    void createFile(String fileName, UserEntity user, InputStream inputStream);

    /**
     * Create Asset
     *
     * @param assetName   The asset name
     * @param description The description asset
     * @param user        The user
     */
    void createAsset(String assetName, String description, UserEntity user);

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
    boolean removeFileFromAsset(FileEntity file, AssetEntity asset);
}
