package com.jme.asset.store;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@EnableAutoConfiguration
public class AssetStoreApplication {

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/math/add", method = RequestMethod.GET )
    @ResponseBody
    String add(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return "The sum is = " + (first + second);
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }
}
