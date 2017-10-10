package com.jme.asset.store;

import com.jme.asset.store.data.entity.UserEntity;
import com.jme.asset.store.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@Controller
public class AssetStoreApplication {

    @Autowired
    UserService userService;

    @RequestMapping("/")
    @ResponseBody
    String home() {
        userService.addUser(new UserEntity("Denis", "1234"));

        return "Hello World!";
    }


    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);


    }
}
