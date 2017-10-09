package com.jme.asset.store.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;

@Service
public class FileServiceImplementation implements FileService {

    private static String UploadFolder = "src/main/resources/public/";


    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile multipartFile) {

        if (multipartFile.isEmpty()) {
            return new ResponseEntity<Object>("File is empty", HttpStatus.CONFLICT);
        }
        try {
            Path path = Paths.get(UploadFolder + multipartFile.getOriginalFilename());
            Files.copy(multipartFile.getInputStream(), path);
        } catch (IOException ex) {
            ex.printStackTrace();
            return new ResponseEntity<Object>("File is not upload", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Object>("File is upload", HttpStatus.OK);
    }

    public ResponseEntity<?> generateRandomDataFile() {
        File randomDataFile = new File("rundomDataFile");
        InputStreamResource inputStreamResource = null;
        Random random = new Random(System.currentTimeMillis());
        try (FileWriter randomstream = new FileWriter(randomDataFile)) {
            for (int i = 0; i <= random.nextInt(10000); i++) {
              String line = String.format("%s %s %s %n", random.nextInt(), random.nextInt(), random.nextInt());
             // byte [] bytes = line.getBytes();
                randomstream.write(line);
            }
            InputStreamResource  resource = new InputStreamResource(new FileInputStream(randomDataFile));
        } catch (IOException exp) {
            exp.printStackTrace();
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Cashe-Control", "no-cashe, no-store, must revalidate");
        httpHeaders.add("Pragma", "no-cashe");
        httpHeaders.add("Expires", "0");
        httpHeaders.add("content-disposition", "inline; filename=\"" + randomDataFile.getName() + "\"");

        return ResponseEntity.ok()
                .headers(httpHeaders)
                .contentLength( randomDataFile.length())
                .contentType(MediaType.parseMediaType("application/ocet-stream"))
                .body(inputStreamResource);

    }
}
