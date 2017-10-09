package com.jme.asset.store.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.Random;

@Service("fileServiceNIO")
public class FileServiceNIOImpl implements FileService {

    @Override
    public ResponseEntity<?> fileUpload(MultipartFile file) {
        Path path = Paths.get("src/main/resources/public/" + file.getOriginalFilename());
        try {
            byte[] bytes = file.getBytes();
            Path newFile = Files.write(path, bytes, StandardOpenOption.TRUNCATE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("IOException");
        }
        return ResponseEntity.ok().body("upload");
    }

    @Override
    public ResponseEntity<?> randomFileGeneration() {
        Random random = new Random(System.currentTimeMillis());
        int arrSize = random.nextInt(1000);
        byte[] bytes = new byte[arrSize];
        for (int i = 0; i < arrSize; i++) {
            bytes[i] = (byte) random.nextInt();
        }
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(bytes);
    }
}
