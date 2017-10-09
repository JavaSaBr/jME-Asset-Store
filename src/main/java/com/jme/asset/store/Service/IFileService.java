package com.jme.asset.store.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


public interface IFileService {
    public  ResponseEntity<?> fileUpload(MultipartFile file);
}
