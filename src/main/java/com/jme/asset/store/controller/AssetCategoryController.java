package com.jme.asset.store.controller;

import com.jme.asset.store.Routes;
import com.jme.asset.store.controller.params.AssetCategoryParams;
import com.jme.asset.store.db.entity.asset.AssetCategoryEntity;
import com.jme.asset.store.service.AssetCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@Controller
@RequestMapping(Routes.API_APPSETTINGS_ASSET_CATEGORY)
public class AssetCategoryController {

    @NotNull
    private final AssetCategoryService assetCategoryService;

    @Autowired
    public AssetCategoryController(@NotNull final AssetCategoryService assetCategoryService) {
        this.assetCategoryService = assetCategoryService;
    }

    @GetMapping("/all-categories")
    public ResponseEntity<?> allCategories() {
        List<AssetCategoryEntity> entities = assetCategoryService.getAllCategories();
        return ResponseEntity.ok(entities);
    }

    @GetMapping("/delete-category")
    public ResponseEntity<?> deleteCategory(@RequestParam(name = "id") final Long id) {
        final AssetCategoryEntity categoryEntity = assetCategoryService.load(id);
        assetCategoryService.removeCategory(categoryEntity);
        return ResponseEntity.ok("Deleted");
    }

    @PostMapping(value = "/add-category")
    public ResponseEntity<?> addCategory(@RequestBody final AssetCategoryParams params) {
        final String name = params.getName();
        final String description = params.getDescription();
        final Long id = params.getId();
        final AssetCategoryEntity categoryEntity;
        if (id == null) {
            categoryEntity = null;
        } else {
            categoryEntity = assetCategoryService.load(id);
        }
        assetCategoryService.addCategory(name, description, categoryEntity);

        return ResponseEntity.ok("Added");
    }

    @GetMapping("/get-children")
    public ResponseEntity<?> getChildren(@RequestParam(name = "id") final Long id) {
        final List<AssetCategoryEntity> children = assetCategoryService.getAllChildrenByParrentId(id);
        return ResponseEntity.ok(children);
    }

}
