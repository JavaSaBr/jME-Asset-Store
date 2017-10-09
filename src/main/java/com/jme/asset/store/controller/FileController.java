package com.jme.asset.store.controller;

import org.omg.CORBA.portable.InputStream;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
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

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.nio.channels.Channel;
import java.nio.file.*;
import java.util.Random;

@Controller
public class FileController {
    private static String PATH = "src/main/resources/public/";

    @PostMapping("/test_post/upload_file")
    ResponseEntity<?> fileUpload(@RequestParam("file") MultipartFile file){
        if(file.isEmpty()) return new ResponseEntity<>("File is empty!!!", HttpStatus.BAD_REQUEST);
        try {
            Files.write(Paths.get(PATH + file.getOriginalFilename()), file.getBytes());
            return new ResponseEntity<>("Success", HttpStatus.OK);
        }
        catch (Exception ex) {
            return new ResponseEntity<>("Bad file", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/test_post/send_text")
    ResponseEntity<?> sendText(@RequestParam("text") String text){
        System.out.println(text);
        return new ResponseEntity<>("Success send",HttpStatus.OK);
    }

    @RequestMapping(value = "/download/random", method = RequestMethod.GET)
    ResponseEntity<?> random(){
        Random rand = new Random();
        StringBuilder sb = new StringBuilder();
        int len = rand.nextInt(1000);
        for(int i=0;i<len;i++){
            sb.append(rand.nextInt(1000));
            sb.append(", ");
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("content-disposition", "inline; filename=\"" + "random_file.txt" + "\"");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(len*2)
                .contentType(MediaType.parseMediaType("application/text"))
                .body(sb.toString());
    }
}
