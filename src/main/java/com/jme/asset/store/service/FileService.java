package com.jme.asset.store.service;

        import org.springframework.web.multipart.MultipartFile;

        import java.io.IOException;

public interface FileService {

    String generateRandomDataFile();

    void handleFileUpload(MultipartFile multipartFile) throws IOException;
}
