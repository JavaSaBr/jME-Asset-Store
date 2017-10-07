package com.jme.asset.store.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    public ResponseEntity <?> fileUpload(MultipartFile file);
    public ResponseEntity <?> randomFileGeneration();
}
