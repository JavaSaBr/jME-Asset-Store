import {Component, OnInit} from '@angular/core';
import {AssetCategoryEntity} from "../../../../../model/entity/asset-category-entity";
import {CategoryComponent} from "../../../../../model/category/category-component";
import {AssetCategoryService} from "../../../../../service/asset-category.service";
import {AssetCategoryParam} from "../../../../../model/category/asset-category-param";

/**
 * @author Alena Solonevich
 */
@Component({
  selector: 'app-asset-category',
  templateUrl: './asset-category.component.html',
  styleUrls: ['./asset-category.component.css']
})
export class AssetCategoryComponent implements OnInit {

  private _categoryParam: AssetCategoryParam;

  private _path: CategoryComponent[];

  private _categories: AssetCategoryEntity[];

  private _trigger: boolean;

  private _error: string;

  constructor(private readonly categoryService: AssetCategoryService) {

  }

  ngOnInit() {
    this._categoryParam = new AssetCategoryParam;
    this._trigger = false;
    this._path = [];
    this._path.push(new CategoryComponent("root", null));
    this.tryGetCategories();
  }

  tryGetCategories(): void {
    this.categoryService.getCategories()
      .then(value => this._categories = value);
  }

  tryAddCategory() {
    let path = this.path;
    this._categoryParam.id = path[path.length - 1].id;
    this.categoryService.addCategory(this.categoryParam, (message, result) => {
      if (result) {
        this._categoryParam.name = '';
        this._categoryParam.description = '';
        this._error = '';
        this._trigger = false;
        this._categoryParam.id = '';
        this.refreshFor(this._path[this._path.length - 1].id);
      } else {
        this._error = message;
      }
    });
  }

  tryDeleteCategory(id: string) {
    this.categoryService.removeCategory(id, (message, result) => {
      if (result) {
        this.refreshFor(this._path[this._path.length - 1].id);
      } else {
        this._error = message;
      }
    });
  }

  tryGetChildren(name: string, id: string) {

    this.categoryService.getChildrenCategories(id)
      .then(value => {
        this._categories = value;
        this.path.push(new CategoryComponent(name , id));
      });
  }



  refreshFor(id: string) {
    if (id == null) {
      this.tryGetCategories();
    } else {
      this.categoryService.getChildrenCategories(id)
        .then(value => this._categories = value);
    }
  }

  switchTrigger() {
    this._trigger = !this._trigger;
  }

  /**
   * Set the current top of path.
   *
   * @param {string} componentId the top component id.
   */
  setTopOfPath(componentId: string) {
    for (let i = this._path.length - 1; i >= 0; i--) {
      let component = this._path[i];
      if (component.id != componentId) {
        this._path.pop();
      } else {
        this.refreshFor(this._path[this._path.length - 1].id);
        return;
      }
    }
  }

  /**
   * Get the categories
   *
   */
  get categories(): AssetCategoryEntity[] {
    return this._categories;
  }

  /**
   * Set the categories.
   *
   */
  set categories(value: AssetCategoryEntity[]) {
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
   * @returns {boolean} the trigger.
   */
  get trigger(): boolean {
    return this._trigger;
  }

  /**
   * Set the add trigger.
   *
   * @param {boolean} value the trigger.
   */
  set trigger(value: boolean) {
    this._trigger = value;
  }

  /**
   * Get the asset category param.
   *
   * @returns {AssetCategoryParam} the asset category param.
   */
  get categoryParam(): AssetCategoryParam {
    return this._categoryParam;
  }

  /**
   * Set the category param.
   *
   * @param {AssetCategoryParam} value the asset category param.
   */
  set categoryParam(value: AssetCategoryParam) {
    this._categoryParam = value;
  }

  /**
   * Get the error.
   *
   * @returns {string} the error.
   */
  get error(): string {
    return this._error;
  }

  /**
   * Set the error.
   *
   * @param {string} value the error.
   */
  set error(value: string) {
    this._error = value;
  }
}
