package com.jme.asset.store.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

/**
 *  The service to work with file.
 *
 * @author Denis Lesheniuk
 */
public interface FileService {
    /**
     * The method uploads the file to the server.
     *
     * @param file the multipartFile.
     * @return the result of the uploading with the Http status.
     */
    public ResponseEntity <?> fileUpload(MultipartFile file);
    /**
     * The method generates a file with
     * random content and.
     *
     * @return the generated file with Http status.
     */
    public ResponseEntity <?> randomFileGeneration();
}
