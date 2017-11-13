package com.jme.asset.store.controller;

import static com.jme.asset.store.security.util.SecurityUtil.getCurrentUser;
import static java.util.Objects.requireNonNull;

import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.AssetCategoryParams;
import com.jme.asset.store.controller.params.AssetCreateParam;
import com.jme.asset.store.controller.response.ErrorResponse;
import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.AssetCategoryService;
import com.jme.asset.store.service.AssetService;
import com.jme.asset.store.util.Utils;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Collections;
import java.util.List;

/**
 * The Asset controller provides set of endpoints for working with Asset
 *
 * @author Alena Solonevich
 */
@Controller
@RequestMapping("/" + Routes.API_ASSETS)
public class AssetController {

    /**
     * The asset service
     */
    @NotNull
    private final AssetService assetService;

    /**
     * The category service
     */
    @NotNull
    private final AssetCategoryService categoryService;

    @Autowired
    public AssetController(@NotNull final AssetService assetService,
                           @NotNull final AssetCategoryService categoryService) {
        this.assetService = assetService;
        this.categoryService = categoryService;
    }

    /**
     * Create new Asset
     *
     * @param params the asset creation param
     * @return OK if the asset is created successfully, else BAD_REQUEST
     */

    @PostMapping(value = "add/asset")
    public ResponseEntity<?> createAsset(@RequestPart(name = "file") final MultipartFile file,
                                         @RequestPart(name = "asset", required = false) final AssetCreateParam params) {
        final String name = params.getName();
        final String description = params.getDescription();
        final AssetCategoryEntity assetCategory = categoryService.load(params.getCategoryId());
        ///////////////
        AssetCategoryEntity testCat = categoryService.load(22);
        ///
        final JmeUser currentUser = requireNonNull(getCurrentUser());
        final UserEntity user = currentUser.getUser();
        List<String> warnings;
        try {
            final AssetEntity asset = assetService.createAsset(name, description, user, testCat);
            warnings = assetService.addZipFileToAsset(user, file.getInputStream(), file.getOriginalFilename(), asset.getId());
            warnings.add("The asset is created!");
        } catch (final Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
        return ResponseEntity.ok(warnings);
    }

    /**
     * Upload multipart file to FileEntity
     *
     * @param multipartFile the multipart file to upload
     * @return OK if the file is uploaded successfully, else BAD_REQUEST
     */
    @PostMapping(value = "add/file")
    public ResponseEntity<?> uploadFile(@RequestParam(name = "file") final MultipartFile multipartFile,
                                        @RequestParam(name = "type_id") final long id) {
        final JmeUser currentUser = requireNonNull((getCurrentUser()));
        final UserEntity user = currentUser.getUser();
        final String name = multipartFile.getOriginalFilename();
        try {
            assetService.createFile(name, user, multipartFile.getInputStream(), id);
            return ResponseEntity.ok("The file is uploaded!");
        } catch (final IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }

    }

    /**
     * User's assets
     *
     * @return list of user's assets
     * @author Mikhail Gomanchuk
     */
    @GetMapping(value = "get/assets")
    public ResponseEntity<?> getUserAssets() {
        final JmeUser currentUser = requireNonNull((getCurrentUser()));
        final UserEntity user = currentUser.getUser();
        try {
            return ResponseEntity.status(HttpStatus.OK).body(assetService.getUserAssets(user.getId()));
        } catch (final RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }

    @GetMapping(value = "asset/{id}")
    public ResponseEntity<?> getAsset(@PathVariable("id") final long id) {
        final AssetEntity asset = assetService.getAsset(id);
        if (asset == null) return ResponseEntity.badRequest().body("No asset with id:" + id);
        return ResponseEntity.ok(asset);
    }

    @GetMapping(value = "download/{id}")
    public ResponseEntity<?> downloadAsset(final HttpServletResponse response, @PathVariable("id") final long id) {
        Path filePath = null;
        try {
            filePath = assetService.downloadAsset(id);
            final AssetEntity asset = assetService.getAsset(id);
            final String mimeType = Files.probeContentType(filePath);
            final HttpHeaders headers = new HttpHeaders();
            headers.setAccessControlExposeHeaders(Collections.singletonList("Content-Disposition"));
            headers.set("Content-Disposition", "attachment; filename=" + asset.getName());
            headers.setContentType(MediaType.valueOf(mimeType));

            final Resource resource = new UrlResource(filePath.toUri());
            return new ResponseEntity<>(resource, headers, HttpStatus.OK);
        } catch (final Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }
}
