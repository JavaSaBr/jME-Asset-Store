package com.jme.asset.store.service;

import com.jme.asset.store.config.AppConfig;
import com.jme.asset.store.entity.AssetEntity;
import com.jme.asset.store.entity.FileEntity;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.AssetRepository;
import com.jme.asset.store.repository.FileRepository;
import org.hibernate.Hibernate;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Blob;
import java.util.List;
import java.util.NoSuchElementException;

//import org.hibernate.SessionFactory;


@Service
@Transactional
public class AssetServiceImpl implements AssetService{
    @Autowired
    private SessionFactory sessionFactory;
    /*@Autowired
    private final SessionFactory sessionFactory;*/
    private final AssetRepository assetRepository;
    private final FileRepository fileRepository;


    @Autowired
    public AssetServiceImpl(AssetRepository assetRepository, FileRepository fileRepository) {
        this.assetRepository = assetRepository;
        this.fileRepository = fileRepository;
    }

    @Override
    public void createFileEntity(String nameFile, UserEntity userEntity, InputStream inputStream) throws IOException {
        FileEntity fileEntity = new FileEntity();
        AppConfig appConfig = new AppConfig();
        //Session session = appConfig.entityManagerFactory().unw
        //SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();
        Blob blob = Hibernate.getLobCreator(sessionFactory.openSession()).
                createBlob(inputStream,inputStream.available());


        fileEntity.setName(nameFile);
        fileEntity.setOwner(userEntity);
        fileEntity.setFileContent(blob);
        fileRepository.save(fileEntity);
        //session.close();

    }

    @Override
    public void createAssetEntity(String nameAsset, String description, UserEntity userEntity) {
        AssetEntity assetEntity = new AssetEntity();
        assetEntity.setName(nameAsset);
        assetEntity.setDescription(description);
        assetEntity.setOwner(userEntity);
        assetRepository.save(assetEntity);
    }

    @Override
    public void addFileEntityToAssetEntity(FileEntity fileEntity, String assetName) {
        AssetEntity assetEntity = assetRepository.findByName(assetName);
        if (fileEntity == null || assetEntity == null)
            throw new NoSuchElementException("No such file or asset");

        List<FileEntity> fileEntities = assetEntity.getFiles();
        fileEntities.add(fileEntity);
        assetEntity.setFiles(fileEntities);
        assetRepository.save(assetEntity);

    }

    @Override
    public boolean removeFileEntityFromAssetEntity(FileEntity fileEntity, String assetName) {
        AssetEntity assetEntity = assetRepository.findByName(assetName);
        if (fileEntity == null || assetEntity == null)
            throw new NoSuchElementException("No such file or asset");

        List<FileEntity> fileEntities = assetEntity.getFiles();
        if (!fileEntities.contains(fileEntity)) {
            return false;
        }
        fileEntities.remove(fileEntity);
        assetEntity.setFiles(fileEntities);
        assetRepository.save(assetEntity);
        return true;
    }

}

