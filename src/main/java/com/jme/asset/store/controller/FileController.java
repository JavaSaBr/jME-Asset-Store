package com.jme.asset.store.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.*;
import java.util.Random;

@Controller
public class FileController {
    private static String PATH = "src/main/resources/public/";

    @PostMapping("/test_post/upload_file")
    ResponseEntity<?> fileUpload(@RequestParam("file") MultipartFile file){
        if(file.isEmpty()) return new ResponseEntity<>("File is empty!!!", HttpStatus.BAD_REQUEST);
        try {
            Files.write(Paths.get(PATH + file.getName()), file.getBytes(), StandardOpenOption.TRUNCATE_EXISTING);
            return new ResponseEntity<>("Success", HttpStatus.OK);
        }
        catch (Exception ex) {
            return new ResponseEntity<>("Bad file", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/test_post/send_text")
    ResponseEntity<?> sendText(@RequestParam("text") String text){
        System.out.println(text);
        return new ResponseEntity<Object>("Success send",HttpStatus.OK);
    }

    @RequestMapping(value = "/download/random", method = RequestMethod.GET)
    ResponseEntity<?> random(HttpServletResponse response){
        File file = new File("random_file.txt");
        InputStreamResource inputStreamResource;

        try(FileWriter fileWriter = new FileWriter(file)){
            Random random = new Random(System.currentTimeMillis());
            int end = random.nextInt()%10000 + 100;
            for(int i=0;i<end;i++){
                Integer tmp = random.nextInt();
                fileWriter.write(tmp.toString());
            }
            inputStreamResource = new InputStreamResource(new FileInputStream(file));
            HttpHeaders headers = new HttpHeaders();
            headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
            headers.add("content-disposition", "inline; filename=\"" + file.getName() + "\"");
            headers.add("Pragma", "no-cache");
            headers.add("Expires", "0");

            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(file.length())
                    .contentType(MediaType.parseMediaType("application/text"))
                    .body(inputStreamResource);
        }
        catch (IOException ex){
            return new ResponseEntity<Object>(ex.getMessage(),HttpStatus.CONFLICT);
        }
    }
}
