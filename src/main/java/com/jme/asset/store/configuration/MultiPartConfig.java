package com.jme.asset.store.configuration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.servlet.MultipartConfigElement;
import javax.servlet.annotation.MultipartConfig;

@Configuration
@ComponentScan
@EnableAutoConfiguration

public class MultiPartConfig {
   @Bean
    MultipartConfigElement multipartConfigElement(){
       MultipartConfigFactory factory = new MultipartConfigFactory();
       factory.setMaxFileSize("3000000KB");
       factory.setMaxRequestSize("3000000KB");
       return factory.createMultipartConfig();
   }
}
