package com.jme.asset.store.configuration;

import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.servlet.MultipartConfigElement;

/**
 * Registration of MultipartConfigElement.
 *
 * @author Denis Lesheniuk
 */
@Configuration
public class MultipartConfig {

    /**
     * The method provides opportunity to set specific properties
     * like maximum file size and request size.
     *
     * @return the multipartConfigElement.
     */
    @Bean
    MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxFileSize("3000KB");
        factory.setMaxRequestSize("3000KB");
        return factory.createMultipartConfig();
    }
}
