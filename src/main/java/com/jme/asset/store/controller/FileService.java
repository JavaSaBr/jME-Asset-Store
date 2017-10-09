package com.jme.asset.store.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {

    public ResponseEntity<?> generateRandomDataFile();

    public ResponseEntity<?> handleFileUpload(MultipartFile multipartFile);
}
