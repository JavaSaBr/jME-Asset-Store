package com.jme.asset.store.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
public class MathJsonController {

    @PostMapping(
            value = "/math2/add",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> add(@RequestBody MathParametrs mathParametrs) {
        return ResponseEntity.ok(new MathReasult(mathParametrs.getFirstParam() + mathParametrs.getSecondParam()));
    }

    @PostMapping(
            value = "/math2/sub",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> sub(@RequestBody MathParametrs mathParametrs) {
        return ResponseEntity.ok(new MathReasult(mathParametrs.getFirstParam() - mathParametrs.getSecondParam()));
    }

    @PostMapping(
            value = "/math2/mult",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> mult(@RequestBody MathParametrs mathParametrs) {
        return ResponseEntity.ok(new MathReasult(mathParametrs.getFirstParam() * mathParametrs.getSecondParam()));
    }

    @PostMapping(
            value = "/math2/div",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> div(@RequestBody MathParametrs mathParametrs) throws IOException {

        if (!(mathParametrs.getSecondParam() == 0)) {
            return ResponseEntity.ok(new MathReasult(mathParametrs.getFirstParam() / mathParametrs.getSecondParam()));
        }

        return new ResponseEntity<MathError>(new MathError("Division by zero not allawed!"), HttpStatus.CONFLICT);
    }

    @PostMapping(
            value = "/math2/pow",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> pow(@RequestBody MathParametrs mathParametrs) {
        return ResponseEntity.ok(new MathReasult(Math.pow(mathParametrs.getFirstParam(), mathParametrs.getSecondParam())));

    }
}



