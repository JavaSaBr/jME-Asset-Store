package com.jme.asset.store.controller;

import static com.jme.asset.store.security.util.SecurityUtil.getCurrentUser;
import static java.util.Objects.requireNonNull;

import com.jme.asset.store.controller.params.AssetParam;
import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.AssetCategoryService;
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
    @NotNull
    private final AssetCategoryService categoryService;

    @Autowired
    public AssetController(@NotNull final UserService userService, @NotNull final AssetService assetService,
                           @NotNull AssetCategoryService categoryService) {
        this.userService = userService;
        this.assetService = assetService;
        this.categoryService = categoryService;
    }

    /**
     * Create new Asset
     *
     * @param params the asset param
     * @return OK if the asset is created successfully, else BAD_REQUEST
     */
    @PostMapping(value = "add/asset")
    public ResponseEntity<?> createAsset(@RequestBody final AssetParam params) {

        final String name = params.getName();
        final String description = params.getDescription();
        final AssetCategoryEntity assetCategory = categoryService.findById(params.getCategory());
        final JmeUser currentUser = requireNonNull(getCurrentUser());

        final UserEntity user = currentUser.getUser();
        try {
            assetService.createAsset(name, description, user, assetCategory);
        } catch (final RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The asset is not created!");
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
