package com.jme.asset.store.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;


public interface FileServiceImpl {
    public  ResponseEntity<?> fileUpload(MultipartFile file);
}
