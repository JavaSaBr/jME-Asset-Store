package com.jme.asset.store;

import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@SpringBootApplication

public class AssetStoreApplication {

    @Autowired
    UserService userService;

    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }

    @RequestMapping(value = "/home")
    public String root() {
        return "index";
    }
}
