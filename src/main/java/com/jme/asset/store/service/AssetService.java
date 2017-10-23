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
     * @param fileName    the file name
     * @param user        the user
     * @param inputStream the input stream
     */
    void createFile(String fileName, UserEntity user, InputStream inputStream);

    /**
     * Create Asset
     *
     * @param assetName   the asset name
     * @param description the description asset
     * @param user        the user
     */
    void createAsset(String assetName, String description, UserEntity user);

    /**
     * Add file to asset
     *
     * @param file  the file entity file
     * @param asset the asset entity asset
     */
    void addFileToAsset(FileEntity file, AssetEntity asset);

    /**
     * Remove file from asset
     *
     * @param file  the file entity file
     * @param asset the asset entity asset
     * @return the result of removing file from asset
     */
    boolean removeFileFromAsset(FileEntity file, AssetEntity asset);
}
