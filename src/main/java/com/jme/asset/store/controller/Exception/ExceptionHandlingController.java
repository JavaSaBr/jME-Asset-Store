package com.jme.asset.store.controller.Exception;


import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MultipartException;

import java.io.FileNotFoundException;

@ControllerAdvice
public class ExceptionHandlingController {

    @ExceptionHandler(FileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(FileNotFoundException ex) {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<?> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<Object>("Result is failed: " + name +
                " required parameter is missed", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<?> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<Object>("Result is failed! Please enter the value" +
                " of required parameters both", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<?> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<Object>("Result is failed: incorrect type", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MultipartException.class)
    public ResponseEntity<?> handleError1(MultipartException e) {
        return new ResponseEntity<Object>("Result is failed: incorrect type", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<?> handleMySQLExc(ConstraintViolationException e) {
        return new ResponseEntity<Object>("Result is failed", HttpStatus.CONFLICT);
    }
}
