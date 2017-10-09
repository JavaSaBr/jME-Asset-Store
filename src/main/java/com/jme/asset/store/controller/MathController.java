package com.jme.asset.store.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MathController {


    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    ResponseEntity<?> add(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return ResponseEntity.ok("The addition result is = " + first + second);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    ResponseEntity<?> sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return ResponseEntity.ok("The subtraction result is = " + (second - first));
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    ResponseEntity<?> mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return ResponseEntity.ok("The multiplication result is = " + (second * first));
    }

    @RequestMapping(value = "/math/div", method = RequestMethod.GET)
    ResponseEntity<?> div(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {

        if (!(second == 0)) {
            return ResponseEntity.ok("The division result is = " + ((double) first / second));
        }

        return new ResponseEntity<>("The division by zero is not allowed!", HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    ResponseEntity<?> pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return ResponseEntity.ok("The division result is = " + Math.pow(first, second));

    }
}
