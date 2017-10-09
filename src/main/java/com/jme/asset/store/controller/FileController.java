package com.jme.asset.store.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Random;

@Controller
public class FileController {

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

    @RequestMapping(value="test_post/upload_file", method= RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        return fileUpload(file);
    }

    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text){
        Logger logger = LoggerFactory.getLogger(ApplicationConroller.class);
        logger.info(text);
        return new ResponseEntity<Object>("The text is sended", HttpStatus.OK);
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
