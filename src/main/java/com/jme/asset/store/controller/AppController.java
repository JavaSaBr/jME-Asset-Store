package com.jme.asset.store.controller;

import com.jme.asset.store.service.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

/**
 * The controller provides multiple of endpoints.
 *
 * @author Denis Lesheniuk
 */
@Controller
@Validated
public class AppController {

    private static Logger logger = LoggerFactory.getLogger(AppController.class);  // The logging.

    @Autowired
    private FileService fileService; // The service provides the set of methods to work with files.

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    /**
     * The method adds two numbers.
     * The method is mapped with a math/add request.
     *
     * @param first the first request param.
     * @param second the second request param.
     * @retrn the sum of two numbers with the Http status.
     */
    @RequestMapping(value = "math/add", method = RequestMethod.GET )
    public ResponseEntity<?>   add(@RequestParam("first") Double first, @RequestParam("second") Double second){
        return new ResponseEntity<Object>(first + second, HttpStatus.OK);
    }

    /**
     * The method takes the second number from the first.
     * The method is mapped with a math/sub request.
     *
     * @param first the first request param.
     * @param second the second request param.
     * @retrn the difference of two numbers with the Http status.
     */
    @RequestMapping(value = "math/sub", method = RequestMethod.GET )
    public ResponseEntity<?>   sub(@RequestParam("first") Double first, @RequestParam("second") Double second){
        return new ResponseEntity<Object>(first - second, HttpStatus.OK);
    }

    /**
     * The method multiplies two numbers.
     * The method is mapped with a math/mult request.
     *
     * @param first the first request param.
     * @param second the second request param.
     * @retrn the product of two numbers with the Http status.
     */
    @RequestMapping(value = "math/mult", method = RequestMethod.GET )
    public ResponseEntity<?>   mult(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return new ResponseEntity<Object>(first * second, HttpStatus.OK);
    }

    /**
     * The method raises the first number to the power o the second.
     * The method is mapped with a math/pow request.
     *
     * @param first the first request param.
     * @param second the second request param.
     * @retrn the first number raised to the power of the second with the Http status.
     */
    @RequestMapping(value = "math/pow", method = RequestMethod.GET )
    public ResponseEntity<?>   pov(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return new ResponseEntity<Object>(Math.pow(first, second), HttpStatus.OK);
    }

    /**
     * The method divides the first number by the second.
     * The method is mapped with a math/devide request.
     *
     * @param first the first request param.
     * @param second the second request param.
     * @retrn the dividing result with the Http status.
     */
    @RequestMapping(value = "math/devide", method = RequestMethod.GET )
    public ResponseEntity<?>   devide(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        if(second == 0)return new ResponseEntity<Object>("Divide by zero is forbidden.", HttpStatus.CONFLICT);
        return new ResponseEntity<Object>((double)first / (double)second, HttpStatus.OK);
    }

    /**
     * The method uses the fileService to uploads the file to the server.
     * The method is mapped with a test_post/upload request.
     *
     * @param file the multipartFile.
     * @retrn the result of the uploading with the Http status.
     */
    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file")MultipartFile file){
        return fileService.fileUpload(file);
    }

    /**
     * The method accepts large text and outputs it to the stdout.
     * The method is mapped with a test_post/send_text request.
     *
     * @param text the text.
     * @retrn the Http status.
     */
    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text){
        logger.info(text);
        return new ResponseEntity<Object>(HttpStatus.OK);
    }

    /**
     * The method uses the fileService to generate a file with
     * random content and returns it to the calling program.
     * The method is mapped with a download/random request.
     *
     * @retrn the generated file with Http status.
     */
    @RequestMapping(path = "/download/random", method = RequestMethod.GET)
    public ResponseEntity<?> downloadRandom(){
       return fileService.randomFileGeneration();
    }

    /**
     * The method handling MissingServletRequestParameterException.
     *
     * @param ex the missingServletRequestParameterException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("The parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    /**
     * The method handling NumberFormatException.
     *
     * @param ex the numberFormatException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    /**
     * The method handling NullPointerException.
     *
     * @param ex the nullPointerException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("The parameter is missing!!!", HttpStatus.CONFLICT);
    }

    /**
     * The method handling MissingServletRequestPartException.
     *
     * @param ex missingServletRequestPartException.
     * @return the msg in the response body and the HttpStatus.
     */
    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected!!!", HttpStatus.CONFLICT);
    }



}
