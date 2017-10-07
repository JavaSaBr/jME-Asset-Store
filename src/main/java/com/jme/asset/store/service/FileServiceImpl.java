package com.jme.asset.store.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

@Service("fileService")
public class FileServiceImpl implements FileService {
    @Override
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


    @Override
    public ResponseEntity<?> randomFileGeneration() {


        return null;
    }
}
