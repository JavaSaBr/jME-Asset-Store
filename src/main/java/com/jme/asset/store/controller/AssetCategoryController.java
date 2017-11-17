package com.jme.asset.store.controller;

import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.AssetCategoryParams;
import com.jme.asset.store.controller.response.ErrorResponse;
import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.service.AssetCategoryService;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * The category controller.
 *
 * @author Denis Lesheniuk.
 */
@Controller
@RequestMapping("/" + Routes.API_ASSETS_CATEGORIES)
public class AssetCategoryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AssetCategoryController.class);

    @NotNull
    private final AssetCategoryService assetCategoryService;

    public AssetCategoryController(@NotNull final AssetCategoryService assetCategoryService) {
        this.assetCategoryService = assetCategoryService;
    }

    /**
     * Get all categories.
     *
     * @return the all categories.
     */
    @GetMapping()
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    public ResponseEntity<?> getAll() {
        try {
            return ResponseEntity.ok(assetCategoryService.getCategories());
        } catch (final RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }

    /**
     * Delete category.
     *
     * @param id the id of category.
     * @return http status with msg.
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> deleteCategory(@PathVariable final long id) {
        try {
            final AssetCategoryEntity entity = assetCategoryService.load(id);
            if (entity == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            assetCategoryService.removeCategory(entity);
        } catch (final RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getLocalizedMessage()));
        }
        return ResponseEntity.ok("Deleted.");
    }

    /**
     * Put category.
     *
     * @param params the category params.
     * @return http status with msg.
     */
    @PutMapping("/put")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<?> putCategory(@RequestBody final AssetCategoryParams params) {
        final String name = params.getName();
        final String description = params.getDescription();
        final long parentId = params.getId();
        try {
            final AssetCategoryEntity parent = parentId != 0 ?
                    assetCategoryService.load(parentId) : null;
            if (parentId != 0 && parent == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            assetCategoryService.addCategory(name, description, parent);
        } catch (final RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getLocalizedMessage()));
        }
        return ResponseEntity.ok("Added.");
    }

    /**
     * Get the children.
     *
     * @param id the parent id.
     * @return the children.
     */
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    public ResponseEntity<?> getChildren(@PathVariable final long id) {
        try {
            return ResponseEntity.ok(assetCategoryService.getChildren(id));
        } catch (final RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new ErrorResponse(e.getLocalizedMessage()));
        }
    }
}
