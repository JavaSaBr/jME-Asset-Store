package com.jme.asset.store.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.jme.asset.store.service.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

/**
 * Контролер предостовляющий набор методов для
 * обработки запросов.
 *
 * @author Denis Lesheniuk
 * @version 1.0
 * **/
@Controller
@Validated
public class AppController {

    private static Logger logger = LoggerFactory.getLogger(AppController.class);  // логирование

    @Autowired
    private FileService fileService; // сервис для манипуляций с файлом

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
    public ResponseEntity<?>   devide(@RequestParam("first") Double first, @RequestParam("second") Double second) {
        if(second == 0)return new ResponseEntity<Object>("Divide by zero is forbidden.", HttpStatus.CONFLICT);
        return new ResponseEntity<Object>((double)first / (double)second, HttpStatus.OK);
    }

    //  test_post/uplaod_file - загрузка файла на диск сервера
    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file")MultipartFile file){
        return fileService.fileUpload(file);
    }

    //  test_post/send_text - принятие большого теста и вывода его в консоль
    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text){
        logger.info(text);
        return new ResponseEntity<Object>("The text is sended",HttpStatus.OK);
    }

    //  download/random - при вызове метода, генерирует файл с небольшим случайным содержанием и отправляет вызывающей программе.
    @RequestMapping(path = "/download/random", method = RequestMethod.GET)
    public ResponseEntity<?> downloadRandom() throws IOException {
       return fileService.randomFileGeneration();
    }

    //Перегруженный метод для обработки разных исключений в ендпоинтах

    //Обработка недостоющего параметра
    @ExceptionHandler(MissingServletRequestParameterException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return new ResponseEntity<String>("The parameter is missing: " + name, HttpStatus.CONFLICT);
    }

    //Обработка неверного формата параметра
    @ExceptionHandler(NumberFormatException.class)
    private ResponseEntity<String> handleMissingParams(NumberFormatException ex) {
        return new ResponseEntity<String>("Incorrect parameter format. ", HttpStatus.CONFLICT);
    }

    //Обработка пустого параметра
    @ExceptionHandler(NullPointerException.class)
    private ResponseEntity<String> handleMissingParams(NullPointerException ex) {
        return new ResponseEntity<String>("The parameter is missing!!!", HttpStatus.CONFLICT);
    }

    //Обработка неуказанного файла
    @ExceptionHandler(MissingServletRequestPartException.class)
    private ResponseEntity<String> handleMissingParams(MissingServletRequestPartException ex) {
        return new ResponseEntity<String>("File is not selected!!!", HttpStatus.CONFLICT);
    }



}
