package com.jme.asset.store.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;


public interface FileServiceImpl {
    ResponseEntity<?> fileUpload(MultipartFile file);
}
