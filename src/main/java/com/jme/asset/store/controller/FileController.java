package com.jme.asset.store.controller;

import com.jme.asset.store.service.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

/**
 * The controller provides multiple of endpoints for work with files.
 *
 * @author Denis Lesheniuk
 */
@Controller
@RequestMapping("/file")
public class FileController {
    private static Logger logger = LoggerFactory.getLogger(FileController.class);  // The logging.

   /* @Autowired()
    private FileService fileService; // The service provides the set of methods to work with files.
   */

    @Autowired()
    private FileService fileServiceNIO; // The file service based on the NIO library.

    /**
     * The method uses the fileService to uploads the file to the server.
     * The method is mapped with a file/test_post/upload request.
     *
     * @param file the multipartFile.
     * @return the result of the uploading with the Http status.
     */
    @RequestMapping(value = "test_post/upload_file", method = RequestMethod.POST)
    public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) {
        return fileServiceNIO.fileUpload(file);
    }

    /**
     * The method accepts large text and outputs it to the stdout.
     * The method is mapped with a file/test_post/send_text request.
     *
     * @param text the text.
     * @return the Http status.
     */
    @RequestMapping(value = "test_post/send_text", method = RequestMethod.POST)
    public ResponseEntity<?> sendText(@RequestParam("text") String text) {
        logger.info(text);
        return new ResponseEntity<Object>(HttpStatus.OK);
    }

    /**
     * The method uses the fileService to generate a file with
     * random content and returns it to the calling program.
     * The method is mapped with a file/download/random request.
     *
     * @return the generated file with Http status.
     */
    @RequestMapping(path = "download/random", method = RequestMethod.GET)
    public ResponseEntity<?> downloadRandom() {
        return fileServiceNIO.randomFileGeneration();
    }



}
