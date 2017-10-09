package com.jme.asset.store.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Random;

@Controller
public class ApplicationConroller {


    public ResponseEntity<?> fileUpload(MultipartFile file) {
        File upfile = new File("src/main/resources/public/" + file.getOriginalFilename());
        if (file.isEmpty()) {
            return new ResponseEntity("The file is empty", HttpStatus.CONFLICT);
        }
        try (BufferedOutputStream stream =
                     new BufferedOutputStream(new FileOutputStream(upfile))) {
            byte[] bytes = file.getBytes();
            stream.write(bytes);
        } catch (Exception e) {
            e.getMessage();
        }
        return new ResponseEntity<String>("The file is added. ", HttpStatus.CREATED);
    }
    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    @ResponseBody
    String add(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The sum is = " + (first + second);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    @ResponseBody
    String sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The subtraction is = " + (first - second);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    @ResponseBody
    String mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The multiplication is = " + (first * second);
    }

    @RequestMapping(value = "/math/divide", method = RequestMethod.GET)
    @ResponseBody
    String divide(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        if (second != 0)
            return "The division is = " + (first / second);
        return "error";
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    @ResponseBody
    String pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return "The pow first of second is = " + (Math.pow(first, second));
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("The parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("The parameter is missing!!!", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected!!!", HttpStatus.CONFLICT);
    }
    //  test_post/uplaod_file - загрузка файла на диск сервера

    @RequestMapping(value="test_post/upload_file", method=RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        return fileUpload(file);
    }

    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text){
        Logger logger = LoggerFactory.getLogger(ApplicationConroller.class);
        logger.info(text);
        return new ResponseEntity<Object>("The text is sended",HttpStatus.OK);
    }

    @RequestMapping(value = "download/random", method = RequestMethod.GET)
    public ResponseEntity<?> downloadRandomFile(){
        InputStreamResource resource = null;
        File file = new File("file");
        Random random = new Random();
        try (FileWriter writer = new FileWriter(file)){
            for (int i = 0; i <= random.nextInt(1000); i++) {
                writer.append((char)random.nextInt());
            }
            resource  = new InputStreamResource(new FileInputStream(file));

        } catch (IOException e) {
            e.printStackTrace();
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }


}
