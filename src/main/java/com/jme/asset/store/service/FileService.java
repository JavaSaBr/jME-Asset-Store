package com.jme.asset.store.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

/**
 *Интерфуйс предостовляющий набор методов для манипуляций с текстом
 *
 * @author Denis Lesheniuk
 * @version 1.0
 *  **/
public interface FileService {
    public ResponseEntity <?> fileUpload(MultipartFile file);
    public ResponseEntity <?> randomFileGeneration();
}
