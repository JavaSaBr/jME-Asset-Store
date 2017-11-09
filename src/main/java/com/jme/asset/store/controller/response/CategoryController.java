package com.jme.asset.store.controller.response;

import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.AssetCategoryParams;
import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.service.AssetCategoryService;
import org.jetbrains.annotations.NotNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * The category controller.
 *
 * @author Denis Lesheniuk.
 */
@Controller
@RequestMapping("/" + Routes.API_ASSETS_CATEGORIES)
public class CategoryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    @NotNull
    private final AssetCategoryService assetCategoryService;

    public CategoryController(@NotNull final AssetCategoryService assetCategoryService) {
        this.assetCategoryService = assetCategoryService;
    }

    /**
     * Get all categories.
     *
     * @return the all categories.
     */
    @GetMapping()
    public ResponseEntity<?> getAll() {
        final List<AssetCategoryEntity> entities;
        try {
            entities = assetCategoryService.getAllCategories();
        } catch (RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
        return ResponseEntity.ok(entities);
    }

    /**
     * Delete category.
     *
     * @param id the id of category.
     * @return http status with msg.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable final long id) {
        final AssetCategoryEntity categoryEntity;
        try {
            categoryEntity = assetCategoryService.load(id);
            assetCategoryService.removeCategory(categoryEntity);
        } catch (RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
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
    public ResponseEntity<?> putCategory(@RequestBody final AssetCategoryParams params) {
        final String name = params.getName();
        final String description = params.getDescription();
        final Long parentId = params.getId();
        final AssetCategoryEntity parent;
        try {
            if (parentId == null) {
                parent = null;
            } else {
                parent = assetCategoryService.load(parentId);
            }
            assetCategoryService.addCategory(name, description, parent);
        } catch (RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
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
    public ResponseEntity<?> getChildren(@PathVariable final long id) {
        final List<AssetCategoryEntity> children;
        try {
            children = assetCategoryService.getAllChildrenByParrentId(id);
        } catch (RuntimeException e) {
            LOGGER.error(e.getLocalizedMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorResponse(e.getLocalizedMessage()));
        }
        return ResponseEntity.ok(children);
    }
}
