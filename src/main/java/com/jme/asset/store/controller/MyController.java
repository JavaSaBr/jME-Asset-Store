package com.jme.asset.store.controller;

import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Random;


@Controller
@Validated
public class MyController {

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    ResponseEntity<?> add(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<Object>("The addition result is = " + (first + second), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    ResponseEntity<?> sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<String>("The subtraction result is = " + (second - first), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    ResponseEntity<?> mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<String>("The multiplication result is = " + (second * first), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/div", method = RequestMethod.GET)
    ResponseEntity<?> div(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {

        if (!(second == 0)) {
            return new ResponseEntity<>("The division result is = " + ((double) first / second), HttpStatus.OK);
        }

        return new ResponseEntity<>("The division by zero is not allowed!", HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    ResponseEntity<?> pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return ResponseEntity.ok("The division result is = " + Math.pow(first, second));

    }

    private static String UploadFolder = "src/main/resources/public/";

    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile multipartFile) {

        if (multipartFile.isEmpty()) {
            return new ResponseEntity<Object>("File is empty", HttpStatus.CONFLICT);
        }
        try {
            Path path = Paths.get(UploadFolder + multipartFile.getOriginalFilename());
            Files.copy(multipartFile.getInputStream(), path);
        } catch (IOException ex) {
            ex.printStackTrace();
            return new ResponseEntity<Object>("File is not upload", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Object>("File is upload", HttpStatus.OK);
    }


    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<String> handleFileSendText(@RequestParam("text") String text) {
        if (text.isEmpty()) {
            return new ResponseEntity<String>("Please, enter text!", HttpStatus.CONFLICT);
        }
        System.out.println(text);
        return new ResponseEntity<String>("Text is gettig", HttpStatus.OK);
    }


    @RequestMapping(value = "download/random", method = RequestMethod.GET)
    ResponseEntity<?> generateRundomDataFile() throws IOException {
        File rundomDataFile = new File("rundomDataFile");
        InputStreamResource inputStreamResource = null;
        Random random = new Random(System.currentTimeMillis());
        try (FileWriter fileWriter = new FileWriter(rundomDataFile)) {
            for (int i = 0; i <= random.nextInt(10000); i++) {
                String line = String.format("%s %s %s %n", random.nextInt(), random.nextInt(), random.nextInt());
                fileWriter.write(line);
            }
            inputStreamResource = new InputStreamResource(new FileInputStream(rundomDataFile));
        } catch (IOException exp) {
            exp.printStackTrace();
        }
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Cashe-Control", "no-cashe, no-store, must revalidate");
        httpHeaders.add("Pragma", "no-cashe");
        httpHeaders.add("Expires", "0");
        httpHeaders.add("content-disposition", "inline; filename=\"" + rundomDataFile.getName() + "\"");

        return ResponseEntity.ok()
                .headers(httpHeaders)
                .contentLength(rundomDataFile.length())
                .contentType(MediaType.parseMediaType("application/ocet-stream"))
                .body(inputStreamResource);

    }
}

