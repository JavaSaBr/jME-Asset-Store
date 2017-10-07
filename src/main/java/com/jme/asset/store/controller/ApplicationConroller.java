package com.jme.asset.store.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

@Controller
public class ApplicationConroller {

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    @ResponseBody
    String add(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The sum is = " + (first + second);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    @ResponseBody
    String sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The subtraction is = " + (first - second);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    @ResponseBody
    String mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The multiplication is = " + (first * second);
    }

    @RequestMapping(value = "/math/divide", method = RequestMethod.GET)
    @ResponseBody
    String divide(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        if (second != 0)
            return "The division is = " + (first / second);
        return "error";
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    @ResponseBody
    String pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The pow first of second is = " + (Math.pow(first, second));
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("The parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("The parameter is missing!!!", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected!!!", HttpStatus.CONFLICT);
    }

}
