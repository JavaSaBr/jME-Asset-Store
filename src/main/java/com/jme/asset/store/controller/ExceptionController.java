package com.jme.asset.store.controller;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import java.util.NoSuchElementException;

@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<?> missingParams(MissingServletRequestParameterException ex){
        return new ResponseEntity<>("Missing param: " + ex.getParameterName(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<?> nullPointer(NullPointerException ex){
        return new ResponseEntity<>("Param is missing" ,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<?> nullPointer(NumberFormatException ex){
        return new ResponseEntity<>("Wrong param's format" , HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> missingFile(MissingServletRequestPartException ex) {
        return new ResponseEntity<>("File is not selected", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    private ResponseEntity<String> userExist(DataIntegrityViolationException ex) {
        return new ResponseEntity<>("Such user exists", HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoSuchElementException.class)
    private ResponseEntity<String> noElement(NoSuchElementException e){
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
