package com.jme.asset.store.controller;

import com.jme.asset.store.model.MathParams;
import com.jme.asset.store.model.Result;
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
@RequestMapping("/math2")
public class MathJsonController {
    private static Logger logger = LoggerFactory.getLogger(MathJsonController.class);  // The logging.

    /**
     * The method adds two numbers.
     * The method is mapped with a math2/add request.
     *
     * @param mathParams is the MathParams object.
     * @return the sum of two numbers in the JSON format with the Http status.
     */
    @PostMapping(value = "/add")
    public ResponseEntity<?> add(@RequestBody MathParams mathParams) {
        return ResponseEntity.ok(new Result(mathParams.getFirst() + mathParams.getSecond()));
    }

    /**
     * The method takes the second number from the first.
     * The method is mapped with a math2/sub request.
     *
     * @param mathParams is the MathParams object.
     * @return the difference of two numbers in the JSON format with the Http status.
     */
    @PostMapping(value = "/sub")
    public ResponseEntity<?> sub(@RequestBody MathParams mathParams) {
        return ResponseEntity.ok(new Result(mathParams.getFirst() - mathParams.getSecond()));
    }

    /**
     * The method multiplies two numbers.
     * The method is mapped with a math2/mult request.
     *
     * @param mathParams is the MathParams object.
     * @return the product of two numbers in the JSON format with the Http status.
     */
    @PostMapping(value = "/mult")
    public ResponseEntity<?> mult(@RequestBody MathParams mathParams) {
        return ResponseEntity.ok(new Result(mathParams.getFirst() * mathParams.getSecond()));
    }

    /**
     * The method raises the first number to the power o the second.
     * The method is mapped with a math2/pow request.
     *
     * @param mathParams is the MathParams object.
     * @return the first number raised to the power of the second in the JSON format with the Http status.
     */
    @PostMapping(value = "/pow")
    public ResponseEntity<?> pov(@RequestBody MathParams mathParams) {
        return ResponseEntity.ok(new Result(Math.pow(mathParams.getFirst(), mathParams.getSecond())));
    }

    /**
     * The method divides the first number by the second.
     * The method is mapped with a math2/devide request.
     *
     * @param mathParams is the MathParams object.
     * @return the dividing result in the JSON format with the Http status.
     */
    @PostMapping(value = "/devide")
    public ResponseEntity<?> devide(@RequestBody MathParams mathParams) {
        if (mathParams.getSecond() == 0 && mathParams.getFirst() == 0)
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Parameters not found.");
        if (mathParams.getSecond() == 0)
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Divide by zero is forbidden.");
        return ResponseEntity.ok(new Result(mathParams.getFirst() / mathParams.getSecond()));
    }

}
