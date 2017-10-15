package com.jme.asset.store.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * The controller provides multiple of endpoints for work with math.
 *
 * @author Denis Lesheniuk
 */
@Controller
@RequestMapping("/math")
public class MathController {
    private static Logger logger = LoggerFactory.getLogger(MathController.class);  // The logging.

    /**
     * The method adds two numbers.
     * The method is mapped with a math/add request.
     *
     * @param first  the first request param.
     * @param second the second request param.
     * @return the sum of two numbers with the Http status.
     */
    @GetMapping(value = "/add")
    public ResponseEntity<?> add(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return ResponseEntity.ok(first + second);
    }

    /**
     * The method takes the second number from the first.
     * The method is mapped with a math/sub request.
     *
     * @param first  the first request param.
     * @param second the second request param.
     * @return the difference of two numbers with the Http status.
     */
    @GetMapping(value = "/sub")
    public ResponseEntity<?> sub(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return ResponseEntity.ok(first - second);
    }

    /**
     * The method multiplies two numbers.
     * The method is mapped with a math/mult request.
     *
     * @param first  the first request param.
     * @param second the second request param.
     * @return the product of two numbers with the Http status.
     */
    @GetMapping(value = "/mult")
    public ResponseEntity<?> mult(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return ResponseEntity.ok(first * second);
    }

    /**
     * The method raises the first number to the power of the second.
     * The method is mapped with a math/pow request.
     *
     * @param first  the first request param.
     * @param second the second request param.
     * @return the first number raised to the power of the second with the Http status.
     */
    @GetMapping(value = "/pow")
    public ResponseEntity<?> pov(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return ResponseEntity.ok(Math.pow(first, second));
    }

    /**
     * The method divides the first number by the second.
     * The method is mapped with a math/devide request.
     *
     * @param first  the first request param.
     * @param second the second request param.
     * @return the dividing result with the Http status.
     */
    @GetMapping(value = "/devide")
    public ResponseEntity<?> devide(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        if (second == 0) return new ResponseEntity<Object>("Divide by zero is forbidden.", HttpStatus.CONFLICT);
        return ResponseEntity.ok((double) first / (double) second);
    }


}
