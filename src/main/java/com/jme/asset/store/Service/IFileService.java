package com.jme.asset.store.Server;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface IFileServer {
    public  ResponseEntity<?> fileUpload(MultipartFile file);
}
