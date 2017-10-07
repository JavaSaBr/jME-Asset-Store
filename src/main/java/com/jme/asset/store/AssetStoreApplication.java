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
        return first +  " + " + second + " = "  + (first + second);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET )
    @ResponseBody
    String sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return first +  " - " + second + " = "  + (first - second);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET )
    @ResponseBody
    String multiply(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return first +  " x " + second + " = "  + (first * second);
    }

    @RequestMapping(value = "/math/division", method = RequestMethod.GET )
    @ResponseBody
    String division(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        if(second==0) return "Division by zero is impossible!!!";
        return first +  " / " + second + " = "  + ((double)first / (double)second);
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET )
    @ResponseBody
    String pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return first +  " ^ " + second + " = "  + (int)Math.pow((double)first, (double)second);
    }


    public static void main(String[] args) throws Exception {
        SpringApplication.run(AssetStoreApplication.class, args);
    }
}
