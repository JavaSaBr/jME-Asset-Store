import {Component, OnInit} from '@angular/core';
import {AssetCategoryEntity} from "../../../../../model/entity/asset-category-entity";
import {CategoryComponent} from "../../../../../model/category/category-component";
import {AssetCategoryService} from "../../../../../service/asset-category.service";

/**
 * @author Alena Solonevich
 */
@Component({
  selector: 'app-asset-category',
  templateUrl: './asset-category.component.html',
  styleUrls: ['./asset-category.component.css']
})
export class AssetCategoryComponent implements OnInit {

  private _path: CategoryComponent[];

  private _categories: Promise<AssetCategoryEntity[]>;

  private _addTrigger: boolean;

  constructor(private readonly categoryService: AssetCategoryService) {
    this._path = [];
    this._path.push(new CategoryComponent("root", null));
    this._path.push(new CategoryComponent("settings", null));
    this._path.push(new CategoryComponent("video", null));
    this._path.push(new CategoryComponent("component", null));
    this._path.push(new CategoryComponent("music", null));

    this.tryGetCategories();
  }

  ngOnInit() {
  }

  tryGetCategories(): any {
    this._categories = this.categoryService.getCategories();
  }

  /**
   * Set the current top of path.
   *
   * @param {string} componentId the top component id.
   */
  setTopOfPath(componentId: string) {
    for (let i = this._path.length - 1; i > 0; i--) {
      let component = this._path[i];
      if (component.id != componentId) {
        this._path.pop();
      } else return;
    }
  }

  /**
   * Get the categories
   *
   * @returns {Promise<AssetCategoryEntity[]>} the categories.
   */
  get categories(): Promise<AssetCategoryEntity[]> {
    return this._categories;
  }

  /**
   * Set the categories.
   *
   * @param {Promise<AssetCategoryEntity[]>} value
   */
  set categories(value: Promise<AssetCategoryEntity[]>) {
    this._categories = value;
  }

  /**
   * Get the path.
   *
   * @returns {AssetCategoryComponent[]} the path.
   */
  get path(): CategoryComponent[] {
    return this._path;
  }

  /**
   * Set the path.
   *
   * @param {AssetCategoryComponent[]} value the path.
   */
  set path(value: CategoryComponent[]) {
    this._path = value;
  }

  /**
   * Get the add trigger.
   *
   * @returns {boolean}
   */
  get addTrigger(): boolean {
    return this._addTrigger;
  }

  /**
   * Set the add trigger.
   *
   * @param {boolean} value
   */
  set addTrigger(value: boolean) {
    this._addTrigger = value;
  }
}
