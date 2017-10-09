package com.jme.asset.store.controller;

import com.jme.asset.store.MathObject.Math;
import com.jme.asset.store.MathObject.MathEror;
import com.jme.asset.store.MathObject.MathResult;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MathJsonController {

    @PostMapping(
            value = "/math2/add",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> add(@RequestBody Math params) {
        return ResponseEntity.ok(new MathResult(params.getFirst() + params.getSecond()));
    }

    @PostMapping(
            value = "/math2/sub",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> sub(@RequestBody Math params) {
        return ResponseEntity.ok(new MathResult(params.getFirst() - params.getSecond()));
    }

    @PostMapping(
            value = "/math2/mult",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> mult(@RequestBody Math params) {
        return ResponseEntity.ok(new MathResult(params.getFirst() * params.getSecond()));
    }

    @PostMapping(
            value = "/math2/divide",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> divide(@RequestBody Math params) {
        if (params.getSecond() == 0)
            return ResponseEntity.ok(new MathEror("divide 0"));
        double first = params.getFirst();
        double second = params.getSecond();
        return ResponseEntity.ok(new MathResult(first / second));
    }

    @PostMapping(
            value = "/math2/pow",
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<?> pow(@RequestBody Math params) {
        return ResponseEntity.ok(new MathResult((int) java.lang.Math.pow(params.getFirst(), params.getSecond())));
    }
}
