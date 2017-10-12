package com.jme.asset.store.controller;


import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
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

import java.util.NoSuchElementException;


@ControllerAdvice
public class ExceptionConroller {


    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<>("The parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<?> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<>("The parameter is missing!!!", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return new ResponseEntity<>("File is not selected!!!", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MySQLIntegrityConstraintViolationException.class)
    private ResponseEntity<String> handleMissingParams(MySQLIntegrityConstraintViolationException ex) {
        return new ResponseEntity<>("not unique", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    private ResponseEntity<String> handleMissingParams(ConstraintViolationException ex) {
        return new ResponseEntity<String>("not unique", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(EmptyResultDataAccessException.class)
    private ResponseEntity<String> handleMissingParams(EmptyResultDataAccessException ex) {
        return new ResponseEntity<String>("no exists", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NoSuchElementException.class)
    private ResponseEntity<String> handleMissingParams(NoSuchElementException ex) {
        return new ResponseEntity<String>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }


}
