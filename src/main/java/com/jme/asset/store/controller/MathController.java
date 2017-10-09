package com.jme.asset.store.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MathController {
    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    ResponseEntity<?> add(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<>(first + " + " + second + " = " + (first+second), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    ResponseEntity<?> sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<>(first + " - " + second + " = " + (first-second),HttpStatus.OK);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    ResponseEntity<?> mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<>(first + " x " + second + " = " + (first*second),HttpStatus.OK);
    }

    @RequestMapping(value = "/math/division", method = RequestMethod.GET)
    ResponseEntity<?> division(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        if(second==0) return  new ResponseEntity<Object>("Division by zero is impossible",HttpStatus.CONFLICT);
        return new ResponseEntity<>(first + " / " + second + " = " + ((double)first/(double)second),HttpStatus.OK);
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    ResponseEntity<?> pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<>(first + " x " + second + " = " + (int)Math.pow((double)first,(double)second),HttpStatus.OK);
    }
}
