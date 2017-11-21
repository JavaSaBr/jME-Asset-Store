package com.jme.asset.store.service;

import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileEntity;
import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.nio.file.Path;
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
     * @param file        the file.
     */
    @NotNull FileEntity createFile(@NotNull String fileName,
                                   @NotNull UserEntity user,
                                   @NotNull InputStream inputStream,
                                   @NotNull FileTypeEntity file);

    /**
     * Create a new asset.
     *
     * @param assetName   the asset name.
     * @param description the description asset.
     * @param user        the user.
     * @param category    the category asset.
     */
    @NotNull AssetEntity createAsset(@NotNull String assetName,
                                     @Nullable String description,
                                     @NotNull UserEntity user,
                                     @NotNull AssetCategoryEntity category);

    /**
     * Add file to asset.
     *
     * @param file  the file entity file.
     * @param asset the asset.
     */
    void addFileToAsset(@NotNull FileEntity file, @NotNull AssetEntity asset);

    /**
     * Remove file from asset.
     *
     * @param file  the file entity file.
     * @param asset the asset.
     */
    void removeFileFromAsset(@NotNull FileEntity file, @NotNull AssetEntity asset);

    /**
     * User's assets
     *
     * @param user the user.
     * @return list of user's assets.
     * @author Mikhail Gomanchuk.
     */
    @Nullable List<AssetEntity> getUserAssets(@NotNull final UserEntity user);

    /**
     * All assets
     *
     * @return list of assets
     */
    @Nullable List<AssetEntity> getAssets();

    /**
     * Get asset by id.
     *
     * @param id id of asset.
     * @return asset by id.
     */
    @Nullable AssetEntity getAsset(long id);

    /**
     * Get assets by category
     *
     * @param category asset category
     * @return assets by category
     */
    @Nullable List<AssetEntity> getAssets(@NotNull AssetCategoryEntity category);

    /**
     * Add zip file to asset
     *
     * @param user    creator.
     * @param content InputStream of zip file.
     * @param file    the file.
     * @param asset   the asset.
     * @return List of warnings.
     */
    @NotNull List<String> addZipFileToAsset(@NotNull final UserEntity user,
                                            @NotNull final InputStream content,
                                            @NotNull final MultipartFile file,
                                            @NotNull final AssetEntity asset);

    /**
     * Download asset in zip file.
     *
     * @param assetEntity the asset.
     * @return zip file with asset.
     */
    @NotNull Path downloadAsset(@NotNull final AssetEntity assetEntity);

    /**
     * Remove asset.
     *
     * @param assetEntity the asset.
     */
    void removeAsset(@NotNull final AssetEntity assetEntity);
}
