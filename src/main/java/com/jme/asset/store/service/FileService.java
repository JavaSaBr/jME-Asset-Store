package com.jme.asset.store.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

//import java.nio.file.Path;
import java.io.IOException;
import java.nio.file.*;

@Service
public class FileService implements FileServiceImpl {

    static String pathToFile = "src/main/resources/public/";

    public  ResponseEntity<?> fileUpload(MultipartFile file) {
        //return ResponseEntity.ok().body("ergerger");

        if (file.isEmpty()) {
            return new ResponseEntity("The file is empty", HttpStatus.CONFLICT);
        }
        try {
            Path path = Paths.get(pathToFile + file.getOriginalFilename());
            //Files.write(path,file.getBytes());
            Files.copy(file.getInputStream(),path,StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.ok().body("exception");
        }

        return ResponseEntity.ok().body("file upload");
    }

}
