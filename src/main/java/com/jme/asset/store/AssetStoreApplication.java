package com.jme.asset.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnableAutoConfiguration
public class AssetStoreApplication {

          public static void main(String[] args) throws Exception {
            SpringApplication.run(AssetStoreApplication.class, args);
        }

    }