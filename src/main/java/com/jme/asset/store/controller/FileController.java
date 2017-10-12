package com.jme.asset.store.controller;

import com.jme.asset.store.service.FileService;
import com.jme.asset.store.service.FileServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.util.Random;

@Controller
public class FileController {

    private FileServiceImpl service = new FileService();

    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        return service.fileUpload(file);
    }

    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text) {
        Logger logger = LoggerFactory.getLogger(ExceptionController.class);
        logger.info(text);
        return new ResponseEntity<Object>("The text is send", HttpStatus.OK);
    }

    @RequestMapping(value = "download/random", method = RequestMethod.GET)
    public ResponseEntity<?> downloadRandomFile(HttpServletResponse response) {
        StringBuilder string = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < 100; i++)
            string.append(random.nextInt());

        HttpHeaders headers = new HttpHeaders();
        return ResponseEntity.ok()
                .headers(headers).contentType(MediaType.parseMediaType("application/text"))
                .body(string.toString());
    }


}
