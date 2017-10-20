package com.jme.asset.store.config;



import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.persistence.EntityManagerFactory;

@Configuration
public class AppConfig {

    @Autowired
    EntityManagerFactory entityManagerFactory;

    @Bean
    public SessionFactory getSessionFactory(){
        if(entityManagerFactory.unwrap(SessionFactory.class)==null)
            throw new NullPointerException("ijuhg");
        return entityManagerFactory.unwrap(SessionFactory.class);
    }
}
