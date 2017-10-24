package com.jme.asset.store.controller;

import com.jme.asset.store.controller.params.AssetParam;
import com.jme.asset.store.entity.UserEntity;
import com.jme.asset.store.repository.UserRepository;
import com.jme.asset.store.service.AssetService;
import com.jme.asset.store.service.UserService;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 * The Asset controller provides set of endpoints for working with Asset
 *
 * @author Alena Solonevich
 */
@Controller
public class AssetController {

    private final UserService userService;
    private final AssetService assetService;
    private final UserRepository userRepository;

    @Autowired
    public AssetController(UserService userService,
                           AssetService assetService,
                           UserRepository userRepository) {
        this.userService = userService;
        this.assetService = assetService;
        this.userRepository = userRepository;
    }

    /**
     * @param assetParam the asset param
     * @return ResponseEntity with status OK if the asset is created successfully, else BAD_REQUEST
     */
    @PostMapping(value = "add/asset")
    public ResponseEntity<?> createAsset(@NotNull @RequestBody AssetParam assetParam) {
        final String name = assetParam.getName();
        final String description = assetParam.getDescription();
        final UserEntity user = userRepository.findByLogin("alena");
        try {
            assetService.createAsset(name, description, user);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The asset is not  created!");
        }
        return ResponseEntity.ok("The asset is created!");
    }

    /**
     * @param multipartFile the multipart file to upload
     * @return ResponseEntity with status OK if the file is uploaded successfully, else BAD_REQUEST
     */
    @PostMapping(value = "file/upload")
    public ResponseEntity<?> uploadFile(@NotNull @RequestParam(name = "file") MultipartFile multipartFile) {
        final String name = multipartFile.getOriginalFilename();

        final UserEntity user = userRepository.findByLogin("alena");
        try {
            assetService.createFile(name, user, multipartFile.getInputStream());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("The file is not  uploaded!");
        }
        return ResponseEntity.ok("The file is uploaded!");
    }
}
