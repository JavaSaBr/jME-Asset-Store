package com.jme.asset.store.service;

import com.jme.asset.store.entity.AssetEntity;
import com.jme.asset.store.entity.FileEntity;
import com.jme.asset.store.entity.UserEntity;

import java.io.InputStream;

public interface AssetService {
    
    void createFile(String fileName, UserEntity userEntity, InputStream inputStream);

    void createAssetEntity(String assetName, String description, UserEntity userEntity);

    void addFileToAsset(FileEntity file, AssetEntity asset);

    boolean removeFileFromAsset(FileEntity file, AssetEntity asset);
}
