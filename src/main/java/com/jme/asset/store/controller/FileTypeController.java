package com.jme.asset.store.controller;

import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.FileTypeCreateParams;
import com.jme.asset.store.controller.response.ErrorResponse;
import com.jme.asset.store.service.FileTypeService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * The File type controller provides set of endpoints for working with file types
 *
 * @author Alena Solonevich
 */
@Controller
@RequestMapping("/" + Routes.API_FILE_TYPES)
public class FileTypeController {

    /**
     * The file types service
     */
    @NotNull
    private FileTypeService fileTypeService;

    @Autowired
    public FileTypeController(@NotNull final FileTypeService fileTypeService) {
        this.fileTypeService = fileTypeService;
    }

    /**
     * Create new file type
     * return OK, if new file type is added, else BAD_REQUEST
     */
    @PostMapping(value = "/add")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> addFileType(@RequestBody final FileTypeCreateParams params) {

        final String name = params.getName();
        final String mimeType = params.getMimeType();
        final String extension = params.getExtension();

        try {
            fileTypeService.createType(name, mimeType, extension);
        } catch (final RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getLocalizedMessage()));
        }

        return ResponseEntity.ok("The file type is added!");
    }

    /**
     * Get the list of all file types
     *
     * @return OK, if the list of all file types is loaded, CONFLICT if the list is empty
     */
    @GetMapping()
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> getAllFileTypes() {
        return ResponseEntity.ok(fileTypeService.loadAllTypes());
    }
}