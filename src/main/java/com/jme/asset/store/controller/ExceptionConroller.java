package com.jme.asset.store.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;



@Controller
public class ApplicationConroller {


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
