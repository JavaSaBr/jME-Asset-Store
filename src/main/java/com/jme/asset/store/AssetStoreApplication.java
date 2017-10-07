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
        return "The addition result is = " + (first + second);
    }
    @RequestMapping(value = "/math/sub", method = RequestMethod.GET )
    @ResponseBody
    String sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return "The subtraction result is = " + (second - first);
    }
    @RequestMapping(value = "/math/mult", method = RequestMethod.GET )
    @ResponseBody
    String mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The multiplication result is = " + (second * first);
    }
    @RequestMapping(value = "/math/div", method = RequestMethod.GET )
    @ResponseBody
    String div(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
            if (!(second==0))
                return "The division result is = " + ((double)first/second);
           return "The division by zero is not allowed!";

        }
    @RequestMapping(value = "/math/pow", method = RequestMethod.GET )
    @ResponseBody
    String pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {

        return "The division result is = " + Math.pow( first,second);

    }
    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }
}
