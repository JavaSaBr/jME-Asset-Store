package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.InputStream;
import java.util.List;

/**
 * The Asset service interface
 *
 * @author Yunkevich Andrei
 */
public interface AssetService {

    /**
     * Creates a new file.
     *
     * @param fileName    the file name.
     * @param user        the user.
     * @param inputStream the input stream.
     */
    @NotNull FileEntity createFile(@NotNull String fileName, @NotNull UserEntity user,
                                   @NotNull InputStream inputStream, long id);

    /**
     * Create a new asset.
     *
     * @param assetName   the asset name.
     * @param description the description asset.
     * @param user        the user.
     * @param category    the category asset.
     */
    @NotNull AssetEntity createAsset(@NotNull String assetName, @Nullable String description, @NotNull UserEntity user,
                                     @NotNull AssetCategoryEntity category);

    /**
     * Add file to asset
     *
     * @param file  the file entity file
     * @param id the asset entity asset id
     */
    void addFileToAsset(@NotNull FileEntity file, long id);

    /**
     * Remove file from asset
     *
     * @param file  the file entity file
     * @param id the asset entity asset id
     */
    void removeFileFromAsset(@NotNull FileEntity file, long id);

    /**
     * User's assets
     *
     * @param id user's id
     * @return list of user's assets
     *
     * @author Mikhail Gomanchuk
     */
    @Nullable List<AssetEntity> getUserAssets(long id);
}
