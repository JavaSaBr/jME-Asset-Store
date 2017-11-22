import {Component, OnInit} from '@angular/core';
import {AssetCategoryEntity} from "../../../../model/entity/asset-category-entity";
import {AssetCategoryService} from "../../../../service/asset-category.service";
import {AssetEntity} from "../../../../model/entity/asset-entity";
import {AssetService} from "../../../../service/asset/asset.service";

/**
 * Implementation of logic for UI for work with asset category and asset.
 *
 * @author Andrei Yunkevich
 */
@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.component.html',
  styleUrls: ['./browsing.component.css']
})
export class BrowsingComponent implements OnInit {

  /**
   *  The list of categories.
   */
  categories: AssetCategoryEntity[];

  /**
   * The category.
   */
  selectNode: AssetCategoryEntity;

  /**
   * The list of assets
   */
  assets: AssetEntity[];

  constructor(private readonly categoryService: AssetCategoryService,
              private readonly assetService: AssetService) {

  }

  ngOnInit() {
    this.loadCategories();
    this.loadAssets();
  }

  /**
   * Get the categories.
   */
  loadCategories(): void {
    this.categoryService.getCategories()
      .then(value => this.categories = value);
  }

  /**
   * Get the assets.
   */
  loadAssets(): void {
    this.assetService.loadAllAssets()
      .then(value => this.assets = value)
  }

  /**
   * Get assets by category.
   *
   * @param {AssetCategoryEntity} select asset category
   */
  sortAssets(select: AssetCategoryEntity) {
    this.assetService.loadCategoryAssets(select.id.toString())
      .then(value => this.assets = value);
  }

}
