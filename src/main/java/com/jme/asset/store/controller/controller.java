package com.jme.asset.store.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Random;

@Controller
@Validated
public class controller {

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    ResponseEntity<?> add(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<Object>("The addition result is = " + (first + second), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    ResponseEntity<?> sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<String>("The subtraction result is = " + (second - first), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    ResponseEntity<?> mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<String>("The multiplication result is = " + (second * first), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/div", method = RequestMethod.GET)
    ResponseEntity<?> div(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        if (!(second == 0))
            return new ResponseEntity<String>("The division result is = " + ((double) first / second), HttpStatus.OK);
        return new ResponseEntity<String>("The division by zero is not allowed!", HttpStatus.BAD_REQUEST);

    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    ResponseEntity<?> pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {

        return new ResponseEntity<String>(("The division result is = " + Math.pow(first, second)), HttpStatus.OK);

    }

    @RequestMapping(value = "download/random", method = RequestMethod.GET)
    ResponseEntity<?> generateRundomDataFile() {
        File rundomDataFile = new File("rundomDataFile");
        InputStreamResource inputStreamResource = null;
        Random random = new Random(System.currentTimeMillis());
        try (FileWriter fileWriter = new FileWriter(rundomDataFile)) {
            for (int i = 0; i <= random.nextInt(10000); i++) {
                fileWriter.append((char) random.nextInt());
            }
            inputStreamResource = new InputStreamResource(new FileInputStream(rundomDataFile));
        } catch (IOException exp) {
       exp.printStackTrace();
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Cashe-Control", "no-cashe, no-store, must revalidate");
        httpHeaders.add("Pragma", "no-cashe");
        httpHeaders.add("Expires", "0");

        return  ResponseEntity.ok()
                .headers(httpHeaders)
                .contentLength(rundomDataFile.length())
                .contentType(MediaType.parseMediaType("application/ocet-stream"))
                .body(inputStreamResource);

    }

    @PostMapping("test_post/upload_file")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        File upFile = new File("src/main/resources/public/" + file.getOriginalFilename());
        if (file.isEmpty())
            return new ResponseEntity<Object>("File is empty", HttpStatus.CONFLICT);
        try (BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(upFile))) {
            byte[] bytes = file.getBytes();
            stream.write(bytes);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        return new ResponseEntity<Object>("File is upload", HttpStatus.OK);
    }

    @PostMapping("test_post/send_text")
    public ResponseEntity<String> handleFileSendText(@RequestParam("text") String text) {
        System.out.println(text);
        return new ResponseEntity<String>("Text is gettig", HttpStatus.OK);
    }


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
        return new ResponseEntity<Object>("Result is failed", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<?> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<Object>("Result is failed: incorrect type", HttpStatus.CONFLICT);
    }


}