package com.jme.asset.store.service;

import com.jme.asset.store.entity.AssetEntity;
import com.jme.asset.store.entity.FileEntity;
import com.jme.asset.store.entity.UserEntity;

import java.io.IOException;
import java.io.InputStream;

public interface AssetService {
    void createFileEntity(String nameFile, UserEntity userEntity, InputStream inputStream) throws IOException;
    void createAssetEntity(String nameAsset, String description, UserEntity userEntity);
    void addFileEntityToAssetEntity(FileEntity fileEntity, String assetName);
    boolean removeFileEntityFromAssetEntity(FileEntity fileEntity, String assetName);

}
