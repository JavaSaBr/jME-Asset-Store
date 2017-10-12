package com.jme.asset.store.controller;

import com.jme.asset.store.controller.parameters.MathError;
import com.jme.asset.store.controller.parameters.MathResult;
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
    ResponseEntity<?> add(@RequestBody MathParameters mathParameters) {
        return ResponseEntity.ok(new MathResult(mathParameters.getFirstParam() + mathParameters.getSecondParam()));
    }

    @PostMapping(
            value = "/math2/sub",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> sub(@RequestBody MathParameters mathParameters) {
        return ResponseEntity.ok(new MathResult(mathParameters.getFirstParam() - mathParameters.getSecondParam()));
    }

    @PostMapping(
            value = "/math2/mult",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> mult(@RequestBody MathParameters mathParameters) {
        return ResponseEntity.ok(new MathResult(mathParameters.getFirstParam() * mathParameters.getSecondParam()));
    }

    @PostMapping(
            value = "/math2/div",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> div(@RequestBody MathParameters mathParameters) throws IOException {

        if (!(mathParameters.getSecondParam() == 0)) {
            return ResponseEntity.ok(new MathResult(mathParameters.getFirstParam() / mathParameters.getSecondParam()));
        }

        return new ResponseEntity<MathError>(new MathError("Division by zero not allawed!"), HttpStatus.CONFLICT);
    }

    @PostMapping(
            value = "/math2/pow",
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE
    )
    ResponseEntity<?> pow(@RequestBody MathParameters mathParameters) {
        return ResponseEntity.ok(new MathResult(Math.pow(mathParameters.getFirstParam(), mathParameters.getSecondParam())));

    }
}



