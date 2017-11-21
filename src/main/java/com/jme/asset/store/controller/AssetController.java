package com.jme.asset.store.controller;

import static com.jme.asset.store.security.util.SecurityUtil.getCurrentUser;
import static java.util.Objects.requireNonNull;

import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.AssetCreateParam;
import com.jme.asset.store.controller.response.ErrorResponse;
import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.db.entity.asset.AssetEntity;
import com.jme.asset.store.db.entity.asset.FileEntity;
import com.jme.asset.store.db.entity.asset.FileTypeEntity;
import com.jme.asset.store.db.entity.user.UserEntity;
import com.jme.asset.store.security.JmeUser;
import com.jme.asset.store.service.AssetCategoryService;
import com.jme.asset.store.service.AssetService;
import com.jme.asset.store.service.FileTypeService;
import com.sun.org.apache.regexp.internal.RE;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

import java.io.IOException;
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

    private static final Logger LOGGER = LoggerFactory.getLogger(AssetController.class);
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

    /**
     * The file type service.
     */
    @NotNull
    private final FileTypeService fileTypeService;

    @Autowired
    public AssetController(@NotNull final AssetService assetService,
                           @NotNull final AssetCategoryService categoryService,
                           @NotNull final FileTypeService fileTypeService) {
        this.assetService = assetService;
        this.categoryService = categoryService;
        this.fileTypeService = fileTypeService;
    }

    /**
     * Create new Asset
     *
     * @param params the asset creation param
     * @return OK if the asset is created successfully, else BAD_REQUEST
     */
    @PostMapping(value = "add/asset")
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<?> createAsset(@RequestPart(name = "file") final MultipartFile file,
                                         @RequestPart(name = "asset", required = false) final AssetCreateParam params) {

        final String name = params.getName();
        if (name == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("The field 'name' can not be null!"));
        }

        final AssetCategoryEntity assetCategory = categoryService.load(params.getCategoryId());
        if (assetCategory == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("The category is not found!"));
        }

        final String description = params.getDescription();
        final JmeUser currentUser = requireNonNull(getCurrentUser());
        final UserEntity user = currentUser.getUser();

        final List<String> warnings;

        try {
            final AssetEntity asset = assetService.createAsset(name, description, user, assetCategory);

            warnings = assetService.addZipFileToAsset(user, file.getInputStream(), file, asset);
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
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<?> uploadFile(@RequestParam(name = "file") final MultipartFile multipartFile,
                                        @RequestParam(name = "type_id") final long id) {

        final String name = multipartFile.getOriginalFilename();
        if (name == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse("The field 'name' can not be null!"));
        }

        final JmeUser currentUser = requireNonNull((getCurrentUser()));
        final UserEntity user = currentUser.getUser();

        try {
            final FileTypeEntity fileType = fileTypeService.loadType(id);
            if (fileType == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("The file type is not found!"));
            }

            assetService.createFile(name, user, multipartFile.getInputStream(), fileType);
            return ResponseEntity.ok("The file is uploaded!");

        } catch (final RuntimeException | IOException e) {
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
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<?> getUserAssets() {
        final JmeUser currentUser = requireNonNull((getCurrentUser()));
        final UserEntity user = currentUser.getUser();

        try {
            return ResponseEntity.status(HttpStatus.OK).body(assetService.getUserAssets(user));
        } catch (final RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }

    /**
     * Get the asset.
     *
     * @param id the asset id.
     * @return the asset.
     */
    @GetMapping(value = "asset/{id}")
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<?> getAsset(@PathVariable("id") final long id) {
        final AssetEntity asset = assetService.getAsset(id);
        if (asset == null) {
            return ResponseEntity.badRequest().body("No asset with id:" + id);
        }
        return ResponseEntity.ok(asset);
    }

    /**
     * Download the asset.
     *
     * @param id the asset id.
     * @return the resource.
     */
    @GetMapping(value = "download/{id}")
    @PreAuthorize("hasAuthority('ARTIST')")
    public ResponseEntity<?> downloadAsset(@PathVariable("id") final long id) {

        final Path filePath;

        try {
            final AssetEntity asset = assetService.getAsset(id);
            if (asset == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("The asset is not found!"));
            }

            filePath = assetService.downloadAsset(asset);
            final String mimeType = Files.probeContentType(filePath);

            final HttpHeaders headers = new HttpHeaders();
            headers.setAccessControlExposeHeaders(Collections.singletonList("Content-Disposition"));
            headers.set("Content-Disposition", "attachment; filename=" + asset.getName());
            headers.setContentType(MediaType.valueOf(mimeType));

            final Resource resource = new UrlResource(filePath.toUri());

            return ResponseEntity.ok().headers(headers).body(resource);

        } catch (final Exception e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }

    /**
     * Get files of the asset.
     *
     * @param id the asset id.
     * @return the list of the asset files.
     */
    @GetMapping(value = "files/{id}")
    @PreAuthorize("hasAuthority('ARTIST')")
    public @Nullable ResponseEntity<?> getFilesList(@PathVariable("id") final long id) {
        try {
            final AssetEntity asset = assetService.getAsset(id);
            if (asset == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("The asset is not found!"));
            }

            final List<FileEntity> files = asset.getFiles();
            if (files == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            return ResponseEntity.ok(files);

        } catch (final RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }

    /**
     * Delete the asset.
     *
     * @param id the asset id.
     * @return http status and msg.
     */
    @DeleteMapping(value = "asset/{id}")
    @PreAuthorize("hasAnyAuthority('ARTIST')")
    public ResponseEntity<?> deleteAsset(@PathVariable("id") final long id) {
        try {
            final AssetEntity assetEntity = assetService.getAsset(id);
            if (assetEntity == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            assetService.removeAsset(assetEntity);

        } catch (final RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
        return ResponseEntity.ok("Deleted");
    }
}
