package com.jme.asset.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class AssetStoreApplication {


    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }
}
