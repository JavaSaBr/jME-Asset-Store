package com.jme.asset.store.configuration;

import com.jme.asset.store.service.FileService;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


import javax.servlet.MultipartConfigElement;

/**
 *
 * Конфигурация для MultipartFile
 *
 *@author Denis Lesheniuk
 *@version 1.0
 * **/

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class MultipartConfig {

    @Bean
    MultipartConfigElement multipartConfigElement(){
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize("3000KB");
        factory.setMaxRequestSize("3000KB");
        return factory.createMultipartConfig();
    }
}
