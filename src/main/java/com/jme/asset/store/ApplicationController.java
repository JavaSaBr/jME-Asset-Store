package com.jme.asset.store;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.Random;

@Controller
@Validated
public class ApplicationController {
    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }


    @RequestMapping(value = "/math/add", method = RequestMethod.GET)
    ResponseEntity<?> add(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<Object>(first + " + " + second + " = " + (first+second), HttpStatus.OK);
    }

    @RequestMapping(value = "/math/sub", method = RequestMethod.GET)
    ResponseEntity<?> sub(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<Object>(first + " - " + second + " = " + (first-second),HttpStatus.OK);
    }

    @RequestMapping(value = "/math/mult", method = RequestMethod.GET)
    ResponseEntity<?> mult(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<Object>(first + " x " + second + " = " + (first*second),HttpStatus.OK);
    }

    @RequestMapping(value = "/math/division", method = RequestMethod.GET)
    ResponseEntity<?> division(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        if(second==0) return  new ResponseEntity<Object>("Division by zero is impossible",HttpStatus.CONFLICT);
        return new ResponseEntity<Object>(first + " / " + second + " = " + ((double)first/(double)second),HttpStatus.OK);
    }

    @RequestMapping(value = "/math/pow", method = RequestMethod.GET)
    ResponseEntity<?> pow(@RequestParam("first") Integer first, @RequestParam("second") Integer second){
        return new ResponseEntity<Object>(first + " x " + second + " = " + (int)Math.pow((double)first,(double)second),HttpStatus.OK);
    }


    @PostMapping("/test_post/upload_file")
    ResponseEntity<?> fileUpload(@RequestParam("file") MultipartFile file) {
        File upFile = new File("src/main/resources/public/" + file.getOriginalFilename());
        if(file.isEmpty()) return new ResponseEntity<Object>("File is empty", HttpStatus.CONFLICT);
        try(BufferedOutputStream outer = new BufferedOutputStream(new FileOutputStream(upFile))) {
            outer.write(file.getBytes());
        }
        catch (Exception e){
            e.getMessage();
        }
        return new ResponseEntity<Object>("Success", HttpStatus.OK);
    }

    @PostMapping("/test_post/send_text")
    ResponseEntity<?> sendText(@RequestParam("text") String text){
        System.out.println(text);
        return new ResponseEntity<Object>("Success send",HttpStatus.OK);
    }

    @RequestMapping(value = "/download/random", method = RequestMethod.GET)
    ResponseEntity<?> random(HttpServletResponse response){
        File file = new File("random_file.txt");
        InputStreamResource inputStreamResource;

        try(FileWriter fileWriter = new FileWriter(file)){
            Random random = new Random(System.currentTimeMillis());
            int end = random.nextInt()%10000 + 100;
            for(int i=0;i<end;i++){
                Integer tmp = random.nextInt();
                fileWriter.write(tmp.toString());
            }
            inputStreamResource = new InputStreamResource(new FileInputStream(file));
            HttpHeaders headers = new HttpHeaders();
            headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
            headers.add("content-disposition", "inline; filename=\"" + file.getName() + "\"");
            headers.add("Pragma", "no-cache");
            headers.add("Expires", "0");

            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(file.length())
                    .contentType(MediaType.parseMediaType("application/text"))
                    .body(inputStreamResource);
        }
        catch (IOException ex){
            return new ResponseEntity<Object>(ex.getMessage(),HttpStatus.CONFLICT);
        }
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    ResponseEntity<?> missingParams(MissingServletRequestParameterException ex){
        return new ResponseEntity<Object>("Missing param: " + ex.getParameterName(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NullPointerException.class)
    ResponseEntity<?> nullPointer(NullPointerException ex){
        return new ResponseEntity<Object>("Param is missing" ,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NumberFormatException.class)
    ResponseEntity<?> nullPointer(NumberFormatException ex){
        return new ResponseEntity<Object>("Wrong param's format" , HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> missingFile(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected", HttpStatus.BAD_REQUEST);
    }
}
