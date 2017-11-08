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

  private _categories: Promise<AssetCategoryEntity[]>;

  private _trigger: boolean;

  private _error: string;

  constructor(private readonly categoryService: AssetCategoryService) {
    this._categoryParam = new AssetCategoryParam;
    this._trigger = false;
    this._path = [];
    this._path.push(new CategoryComponent("root", null));
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

  switchTrigger() {
    this._trigger = !this._trigger;
  }

  tryAddCategory() {
    this._categoryParam.id = this._path[this._path.length - 1].id;
    this.categoryService.addCategory(this.categoryParam, (message, result) => {
      if (result) {
        this._categoryParam.name = '';
        this._categoryParam.description = '';
        this._categoryParam.id = "";
        this._error = '';
        this._trigger = false;
        this.tryGetCategories();
      } else {
        this._error = message;
      }
    });
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
  get trigger(): boolean {
    return this._trigger;
  }

  /**
   * Set the add trigger.
   *
   * @param {boolean} value
   */
  set trigger(value: boolean) {
    this._trigger = value;
  }


  get categoryParam(): AssetCategoryParam {
    return this._categoryParam;
  }

  set categoryParam(value: AssetCategoryParam) {
    this._categoryParam = value;
  }


  get error(): string {
    return this._error;
  }

  set error(value: string) {
    this._error = value;
  }
}
