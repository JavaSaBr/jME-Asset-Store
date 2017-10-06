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
    //  math/add - слаживает 2 числа
    @RequestMapping(value = "math/add", method = RequestMethod.GET )
    public ResponseEntity<?>   add(@RequestParam("first") Double first, @RequestParam("second") Double second){

        return new ResponseEntity<Object>(first + second, HttpStatus.OK);
    }

    //  math/sub - отнимает второе от первого
    @RequestMapping(value = "math/sub", method = RequestMethod.GET )
    public ResponseEntity<?>   sub(@RequestParam("first") Double first, @RequestParam("second") Double second){
        return new ResponseEntity<Object>(first - second, HttpStatus.OK);
    }

    //  math/mult - перемножает
    @RequestMapping(value = "math/mult", method = RequestMethod.GET )
    public ResponseEntity<?>   mult(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return new ResponseEntity<Object>(first * second, HttpStatus.OK);
    }

    //  /pow - возводит первое число в степень второго числа
    @RequestMapping(value = "math/pow", method = RequestMethod.GET )
    public ResponseEntity<?>   pov(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return new ResponseEntity<Object>(Math.pow(first, second), HttpStatus.OK);
    }

    //  /devide - делит первое на второе
    @RequestMapping(value = "math/devide", method = RequestMethod.GET )
    public ResponseEntity<?>   devide(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<Object>((double)first / (double)second, HttpStatus.OK);
    }


    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("Parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("Parameter is missing!!!", HttpStatus.CONFLICT);
    }


}
