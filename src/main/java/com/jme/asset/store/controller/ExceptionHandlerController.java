package com.jme.asset.store.controller;

import com.fasterxml.jackson.core.JsonParseException;
import com.jme.asset.store.utils.exceptions.RoleAlreadyExistException;
import com.jme.asset.store.utils.exceptions.RoleNotFoundException;
import com.jme.asset.store.utils.exceptions.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.support.MissingServletRequestPartException;


/**
 * The class provides the set of methods for handling exceptions.
 *
 * @author Denis Lesheniuk
 **/
@ControllerAdvice
public class ExceptionHandlerController {
    /**
     * The method handling MissingServletRequestParameterException.
     *
     * @param ex the missingServletRequestParameterException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return ResponseEntity.status(HttpStatus.CONFLICT).body("The parameter is missing: " + name);
    }

    /**
     * The method handling NullPointerException.
     *
     * @param ex the nullPointerException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("The parameter is missing.");
    }

    /**
     * The method handling MissingServletRequestPartException.
     *
     * @param ex missingServletRequestPartException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(MissingServletRequestPartException.class)
    public ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("File is not selected.");
    }

    /**
     * The method handling NumberFormatException.
     *
     * @param ex the numberFormatException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(NumberFormatException.class)
    public ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Incorrect parameter format. ");
    }

    /**
     * The method handling JsonParseException.
     *
     * @param ex the numberFormatException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(JsonParseException.class)
    public ResponseEntity<String> handleMissingParams(JsonParseException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Incorrect parameter format. ");
    }

    /**
     * The method handling UserNotFoundException.
     *
     * @param ex the numberFormatException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleMissingParams(UserNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    }

    /**
     * The method handling RoleNotFoundException.
     *
     * @param ex the numberFormatException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(RoleNotFoundException.class)
    public ResponseEntity<String> handleMissingParams(RoleNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Role not found");
    }

    /**
     * The method handling RoleAlreadyExistException.
     *
     * @param ex the numberFormatException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(RoleAlreadyExistException.class)
    public ResponseEntity<String> handleMissingParams(RoleAlreadyExistException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Role is already exist");
    }
}
