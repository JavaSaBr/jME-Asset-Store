package com.jme.asset.store.controller;

import com.jme.asset.store.configuration.MathError;
import com.jme.asset.store.configuration.MathResult;
import com.jme.asset.store.configuration.MyMath;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MathController2 {

    @RequestMapping(value = "/math2/add",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<?> add(@RequestBody MyMath math) {
        return new ResponseEntity<>(new MathResult(math.getFirst() + math.getSecond()), HttpStatus.OK);
    }

    @RequestMapping(value = "/math2/sub",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<?> sub(@RequestBody MyMath math) {
        return new ResponseEntity<>(new MathResult(math.getFirst() - math.getSecond()), HttpStatus.OK);
    }

    @RequestMapping(value = "/math2/mult",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<?> mult(@RequestBody MyMath math) {
        return new ResponseEntity<>(new MathResult(math.getFirst() * math.getSecond()), HttpStatus.OK);
    }

    @RequestMapping(value = "/math2/div",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<?> div(@RequestBody MyMath math) {
        if (math.getSecond() == 0)
            return new ResponseEntity<>(new MathError("Division by zero"), HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(new MathResult((double) math.getFirst() / (double) math.getSecond()), HttpStatus.OK);
    }

    @RequestMapping(value = "/math2/pow",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<?> pow(@RequestBody MyMath math) {
        return new ResponseEntity<>(new MathResult(Math.pow((double) math.getFirst(), (double) math.getSecond())), HttpStatus.OK);
    }
}
