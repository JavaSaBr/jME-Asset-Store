package com.jme.asset.store.controller.Exception;

import com.mysql.jdbc.exceptions.jdbc4.MySQLIntegrityConstraintViolationException;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.FileNotFoundException;

@ControllerAdvice
public class ExceptionHandlingController {
    @ExceptionHandler(FileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(FileNotFoundException ex) {
        return ResponseEntity.notFound().build();
    }


    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<?> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<Object>("Result is failed: " + name + " required parameter is missed", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<?> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<Object>("Result is failed! Please enter the value of required parameters both", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<?> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<Object>("Result is failed: incorrect type", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MultipartException.class)
    private ResponseEntity<?> handleError1(MultipartException e) {
        return new ResponseEntity<Object>("Result is failed: incorrect type", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    private ResponseEntity<?> handleMySQLExc(ConstraintViolationException e){
        return new ResponseEntity<Object>("Result is failed", HttpStatus.CONFLICT);
}
}
