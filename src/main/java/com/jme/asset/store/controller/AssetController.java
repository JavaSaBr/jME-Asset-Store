package com.jme.asset.store.controller;

import com.jme.asset.store.controller.params.AssetParam;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.service.AssetService;
import com.jme.asset.store.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * The Asset controller provides set of endpoints for working with Asset
 *
 * @author Alena Solonevich
 */
@Controller
@RequestMapping("/assets")
public class AssetController {

    @NotNull
    private final UserService userService;
    @NotNull
    private final AssetService assetService;

    @Autowired
    public AssetController(@NotNull final UserService userService, @NotNull final AssetService assetService) {
        this.userService = userService;
        this.assetService = assetService;
    }

    /**
     * Create new Asset
     *
     * @param assetParam the asset param
     * @return OK if the asset is created successfully, else BAD_REQUEST
     */
    @PostMapping(value = "add/asset")
    public ResponseEntity<?> createAsset(@RequestBody final AssetParam assetParam) {
        final String name = assetParam.getName();
        final String description = assetParam.getDescription();
        final UserEntity user = userService.load("alena");
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        try {
            assetService.createAsset(name, description, user);
        } catch (final RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The asset is not  created!");
        }
        return ResponseEntity.ok("The asset is created!");
    }

    /**
     * Upload multipart file to FileEntity
     *
     * @param multipartFile the multipart file to upload
     * @return OK if the file is uploaded successfully, else BAD_REQUEST
     */
    @PostMapping(value = "add/file")
    public ResponseEntity<?> uploadFile(@RequestParam(name = "file") final MultipartFile multipartFile) {
        final UserEntity user = userService.load("alena");
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        final String name = multipartFile.getOriginalFilename();
        try {
            assetService.createFile(name, user, multipartFile.getInputStream());
        } catch (final IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The file is not  uploaded!");
        }
        return ResponseEntity.ok("The file is uploaded!");
    }
}
