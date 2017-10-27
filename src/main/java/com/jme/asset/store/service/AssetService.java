package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

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
    void createFile(@NotNull String fileName, @NotNull UserEntity user, @NotNull InputStream inputStream);

    /**
     * Create Asset
     *
     * @param assetName   the asset name
     * @param description the description asset
     * @param user        the user
     * @param category    the category asset
     */
    void createAsset(@NotNull String assetName, @Nullable String description,
                     @NotNull UserEntity user, @NotNull AssetCategoryEntity category);

    /**
     * Add file to asset
     *
     * @param file  the file entity file
     * @param asset the asset entity asset
     */
    void addFileToAsset(@NotNull FileEntity file, @NotNull AssetEntity asset);

    /**
     * Remove file from asset
     *
     * @param file  the file entity file
     * @param asset the asset entity asset
     */
    void removeFileFromAsset(@NotNull FileEntity file, @NotNull AssetEntity asset);
}
