package com.jme.asset.store;

import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.AssetRepository;
import com.jme.asset.store.repository.FileRepository;
import com.jme.asset.store.service.AssetService;
import com.jme.asset.store.service.AssetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.FileInputStream;
import java.io.InputStream;

@Controller
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.jme.asset.store")
public class AssetStoreApplication {

    public static void main(String[] args) throws Exception {
        AssetRepository assetRepository = null;
        FileRepository fileRepository = null;
        SpringApplication.run(AssetStoreApplication.class, args);
        UserEntity userEntity = new UserEntity();
        userEntity.setLogin("erfer");
        userEntity.setPassword("erferf");
        AssetService assetService = new AssetServiceImpl(assetRepository, fileRepository);
        InputStream inputStream = new FileInputStream("C:\\file.txt");
        assetService.createFileEntity("ref",userEntity,inputStream);
    }

    @RequestMapping(value = "/home")
    public String root() {
        return "index";
    }
}
