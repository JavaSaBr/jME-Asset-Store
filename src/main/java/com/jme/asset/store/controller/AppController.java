package com.jme.asset.store.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.validation.beanvalidation.MethodValidationPostProcessor;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;


@Controller
@Validated
public class AppController {

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "math/add", method = RequestMethod.GET )
    public ResponseEntity<?>   add(@RequestParam("first") Integer first, @RequestParam("second") Integer second){

        return new ResponseEntity<Object>(first + second, HttpStatus.OK);
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("Parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Encorrect parameter format. ", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("Parameter is missing!!!", HttpStatus.CONFLICT);
    }


}
