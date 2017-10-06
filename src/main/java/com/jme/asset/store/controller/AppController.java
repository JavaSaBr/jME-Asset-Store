package com.jme.asset.store.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import java.io.*;
import java.util.Random;


@Controller
@Validated
public class AppController {

    private static Logger logger = LoggerFactory.getLogger(AppController.class);

    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "Hello World!";
    }
    //  math/add - слаживает 2 числа
    @RequestMapping(value = "math/add", method = RequestMethod.GET )
    public ResponseEntity<?>   add(@RequestParam("first") Double first, @RequestParam("second") Double second){

        return new ResponseEntity<Object>(first + second, HttpStatus.OK);
    }

    //  math/sub - отнимает второе от первого
    @RequestMapping(value = "math/sub", method = RequestMethod.GET )
    public ResponseEntity<?>   sub(@RequestParam("first") Double first, @RequestParam("second") Double second){
        return new ResponseEntity<Object>(first - second, HttpStatus.OK);
    }

    //  math/mult - перемножает
    @RequestMapping(value = "math/mult", method = RequestMethod.GET )
    public ResponseEntity<?>   mult(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return new ResponseEntity<Object>(first * second, HttpStatus.OK);
    }

    //  math/pow - возводит первое число в степень второго числа
    @RequestMapping(value = "math/pow", method = RequestMethod.GET )
    public ResponseEntity<?>   pov(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        return new ResponseEntity<Object>(Math.pow(first, second), HttpStatus.OK);
    }

    //  math/devide - делит первое на второе
    @RequestMapping(value = "math/devide", method = RequestMethod.GET )
    public ResponseEntity<?>   devide(@RequestParam("first") Integer first, @RequestParam("second") Integer second) {
        return new ResponseEntity<Object>((double)first / (double)second, HttpStatus.OK);
    }

    //  test_post/uplaod_file - загрузка файла на диск сервера
    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file")MultipartFile file){
        File upfile = new File("src/main/resources/public/" + file.getOriginalFilename());
        if(file.isEmpty()){
            return new ResponseEntity("File is empty", HttpStatus.CONFLICT);
        }
        try (BufferedOutputStream stream =
                     new BufferedOutputStream(new FileOutputStream(upfile))){
            byte[] bytes = file.getBytes();
            stream.write(bytes);
        } catch (Exception e) {
            e.getMessage();
        }
        return new ResponseEntity<String>("File is added! ",HttpStatus.CREATED);
    }

    //      test_post/send_text - принятие большого теста и вывода его в консоль
    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text){
        logger.info(text);
        return new ResponseEntity<Object>("Text is sended",HttpStatus.OK);
    }

    //      download/random - при вызове метода, генерирует файл с небольшим случайным содержанием и отправлен вызывающей программе.
    @RequestMapping(path = "/download/random", method = RequestMethod.GET)
    public ResponseEntity<Resource> downloadRandom() throws IOException {
        File file = new File("file.txt");
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        Random random = new Random(System.currentTimeMillis());
        try(FileWriter writer = new FileWriter(file)) {
            for (int i = 0; i <= random.nextInt(10000); i++) {
            writer.append((char)random.nextInt());
            }
        }catch (IOException exc){
            exc.printStackTrace();
        }
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));
        return ResponseEntity.ok()
                .headers(headers)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("Parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("Parameter is missing!!!", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected!!!", HttpStatus.CONFLICT);
    }



}
