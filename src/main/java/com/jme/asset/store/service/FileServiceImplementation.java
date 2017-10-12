package com.jme.asset.store.service;

import com.jme.asset.store.service.FileService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
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
            Files.copy(multipartFile.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            Files.write(path, multipartFile.getBytes());
        } catch (IOException ex) {
            ex.printStackTrace();
            return new ResponseEntity<Object>("File is not upload", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Object>("File is upload", HttpStatus.OK);
    }

    public ResponseEntity<?> generateRandomDataFile() {
        // File randomDataFile = new File("randomDataFile");
        // InputStreamResource inputStreamResource = null;
        Random random = new Random(System.currentTimeMillis());
        String content = "";

        for (int i = 0; i < 100; i++) {
            content += random.nextInt() + ",";
        }

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Cashe-Control", "no-cashe, no-store, must revalidate");
        httpHeaders.add("Pragma", "no-cashe");
        httpHeaders.add("Expires", "0");
        httpHeaders.add("content-disposition", "inline; filename=\"" + "randomDataFile.txt" + "\"");
        return ResponseEntity.ok()
                .headers(httpHeaders)
                .contentLength(content.length() * 2)
                .contentType(MediaType.parseMediaType("application/ocet-stream"))
                .body(content);
    }
}
