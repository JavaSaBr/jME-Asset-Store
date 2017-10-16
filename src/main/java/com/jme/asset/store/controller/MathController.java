package com.jme.asset.store.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MathController {


    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @GetMapping(value = "/math/add")
    public ResponseEntity<?> add(@RequestParam("first") final Integer first,
                                 @RequestParam("second") final Integer second) {
        return ResponseEntity.ok("The addition result is = " + first + second);
    }

    @GetMapping(value = "/math/sub")
    public ResponseEntity<?> sub(@RequestParam("first") final Integer first,
                                 @RequestParam("second") final Integer second) {
        return ResponseEntity.ok("The subtraction result is = " + (second - first));
    }

    @GetMapping(value = "/math/mult")
    public ResponseEntity<?> mult(@RequestParam("first") final Integer first,
                                  @RequestParam("second") final Integer second) {
        return ResponseEntity.ok("The multiplication result is = " + (second * first));
    }

    @GetMapping(value = "/math/div")
    public ResponseEntity<?> div(@RequestParam("first") final Integer first,
                                 @RequestParam("second") final Integer second) {
        if ((second == 0)) {
            return new ResponseEntity<>("The division by zero is not allowed!",
                    HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok("The division result is = " + ((double) first / second));
    }

    @GetMapping(value = "/math/pow")
    public ResponseEntity<?> pow(@RequestParam("first") final Integer first,
                                 @RequestParam("second") final Integer second) {
        return ResponseEntity.ok("The pow result is = " + Math.pow(first, second));
    }
}
