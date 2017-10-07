package com.jme.asset.store.service;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Random;

/**
 * Сервис предостовляющий набор методов для манипуляций с текстом.
 * Реализация интерфейса {@link FileService}
 *
 *@author Denis Lesheniuk
 *@version 1.0
 * **/

@Service("fileService")
public class FileServiceImpl implements FileService {

    /**
     *Реализация метода позволяющая сохранять входящий фай на сервере.
     *
     * @param file файл из тела запроса
     * @return responseEntity с заполненными Body и HttpStatus
     *
     * */
    @Override
    public ResponseEntity<?> fileUpload(MultipartFile file) {
        File upfile = new File("src/main/resources/public/" + file.getOriginalFilename());
        if (file.isEmpty()) {
            return new ResponseEntity("The file is empty", HttpStatus.CONFLICT);
        }
        try (BufferedOutputStream stream =
                     new BufferedOutputStream(new FileOutputStream(upfile))) {
            byte[] bytes = file.getBytes();
            stream.write(bytes);
        } catch (Exception e) {
            e.getMessage();
        }
            return new ResponseEntity<String>("The file is added. ", HttpStatus.CREATED);
    }

    /**
     *Реализация метода позволяющая генерировать фаайл с рандомным содержанием.
     *
     * @return responseEntity с заполненными Body, HttpStatus, Headers, ContentLength, ContentType.
     *
     * */
    @Override
    public ResponseEntity<?> randomFileGeneration() {
        InputStreamResource resource = null;
        File file = new File("file");

        Random random = new Random(System.currentTimeMillis());
        try(FileWriter writer = new FileWriter(file)) {
            for (int i = 0; i <= random.nextInt(10000); i++) {
                writer.append((char)random.nextInt());
            }
            resource = new InputStreamResource(new FileInputStream(file));
        }catch (IOException exc){
            exc.printStackTrace();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");

        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }
}
