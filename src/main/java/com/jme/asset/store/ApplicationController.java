package com.jme.asset.store;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Random;

@Controller
@Validated
public class ApplicationController {
    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }


    @ExceptionHandler(MissingServletRequestParameterException.class)
    ResponseEntity<?> missingParams(MissingServletRequestParameterException ex){
        return new ResponseEntity<Object>("Missing param: " + ex.getParameterName(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NullPointerException.class)
    ResponseEntity<?> nullPointer(NullPointerException ex){
        return new ResponseEntity<Object>("Param is missing" ,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NumberFormatException.class)
    ResponseEntity<?> nullPointer(NumberFormatException ex){
        return new ResponseEntity<Object>("Wrong param's format" , HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> missingFile(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected", HttpStatus.BAD_REQUEST);
    }
}
