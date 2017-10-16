package com.jme.asset.store.service;


import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Random;

@Service
public class FileServiceImplementation implements FileService {

    private final static String UploadFolder = "src/main/resources/public/";

    public void handleFileUpload(final MultipartFile multipartFile) throws IOException {
        final Path path = Paths.get(UploadFolder + multipartFile.getOriginalFilename());
        Files.copy(multipartFile.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
    }

    public String generateRandomDataFile() {
        Random random = new Random(System.currentTimeMillis());
        String content = "";
        for (int i = 0; i < 100; i++) {
            content += random.nextInt() + ",";
        }
        return content;
    }
}
