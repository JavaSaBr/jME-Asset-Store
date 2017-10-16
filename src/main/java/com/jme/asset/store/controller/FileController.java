package com.jme.asset.store.controller;

import com.jme.asset.store.service.FileService;
import com.sun.org.apache.regexp.internal.RE;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@Validated

public class FileController {

    private final FileService fileService;

    @Autowired
    public FileController(final FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping(value = "test_post/send_text")
    public ResponseEntity<?> handleFileSendText(@RequestParam("text") final String text) {
        if (text.isEmpty()) {
            return new ResponseEntity<>("Please, enter text!", HttpStatus.CONFLICT);
        }
        System.out.println(text);
        return ResponseEntity.ok("Text is sent");
    }

    @PostMapping(value = "test_post/upload_file")
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") final MultipartFile multipartFile) {
        if (multipartFile.isEmpty()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("File is empty!");
        }
        try {
            fileService.handleFileUpload(multipartFile);
        } catch (IOException ex) {
            ex.printStackTrace();
            return new ResponseEntity<Object>("File is not upload", HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok("File is upload");
    }

    @GetMapping(value = "download/random")
    public ResponseEntity<?> generateRandomDataFile() {
        String content = fileService.generateRandomDataFile();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Cashe-Control", "no-cashe, no-store, must revalidate");
        httpHeaders.add("Pragma", "no-cashe");
        httpHeaders.add("Expires", "0");
        httpHeaders.add("content-disposition", "inline; filename=\"" +
                "randomDataFile.txt" + "\"");
        return ResponseEntity.ok()
                .headers(httpHeaders)
                .contentLength(content.length() * 2)
                .contentType(MediaType.parseMediaType("application/ocet-stream"))
                .body(content);
    }
}

