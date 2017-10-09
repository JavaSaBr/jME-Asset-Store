package com.jme.asset.store.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;


@Controller
@Validated
public class FileController {


    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileSendText(@RequestParam("text") String text) {
        if (text.isEmpty()) {
        return new ResponseEntity<>("Please, enter text!", HttpStatus.CONFLICT);
        }
        System.out.println(text);
        return ResponseEntity.ok("Text is gettig");
    }


    @Autowired
    FileService fileService;

    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile multipartFile) {
     return fileService.handleFileUpload(multipartFile);
    }

    @RequestMapping(value = "download/random", method = RequestMethod.GET)
    public ResponseEntity<?> generateRundomDataFile() {
      return fileService.generateRandomDataFile();
    }
}

