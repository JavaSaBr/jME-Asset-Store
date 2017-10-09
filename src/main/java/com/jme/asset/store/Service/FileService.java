package com.jme.asset.store.Server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.apache.tomcat.jni.File;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
//import java.nio.file.Path;
import java.io.IOException;
import java.nio.file.*;

@Service
public class FileServer implements IFileServer {

    static String pathToFile = "src/main/resourse/public/";



    public  ResponseEntity<?> fileUpload(MultipartFile file) {

        if (file.isEmpty()) {
            return new ResponseEntity("The file is empty", HttpStatus.CONFLICT);
        }
        try {
            Path path = Paths.get(pathToFile + file.getOriginalFilename());
            Files.copy(file.getInputStream(), path);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<>("File upload. ", HttpStatus.OK);
    }

}
