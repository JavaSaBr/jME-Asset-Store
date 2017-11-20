import {Component, OnInit} from '@angular/core';
import {AssetCategoryEntity} from "../../../../../model/entity/asset-category-entity";
import {CategoryComponent} from "../../../../../model/category/category-component";
import {AssetCategoryService} from "../../../../../service/asset-category.service";
import {AssetCategoryParam} from "../../../../../model/category/asset-category-param";

/**
 * Implementation of logic for UI for work with asset category.
 *
 * @author Denis Lesheniuk.
 */
@Component({
  selector: 'app-asset-category',
  templateUrl: './asset-category.component.html',
  styleUrls: ['./asset-category.component.css']
})
export class AssetCategoryComponent implements OnInit {

  /**
   * The category param.
   */
  private _categoryParam: AssetCategoryParam;

  /**
   * The category path.
   */
  private _path: CategoryComponent[];

  /**
   * The list of categories.
   */
  private _categories: AssetCategoryEntity[];

  /**
   * The label for showing dialog with forms.
   */
  private _label: boolean;

  /**
   * The error.
   */
  private _error: string;

  constructor(private readonly categoryService: AssetCategoryService) {

  }

  ngOnInit() {
    this.error = '';
    this.categoryParam = new AssetCategoryParam;
    this.label = false;
    this.path = [];
    this.path.push(new CategoryComponent("Home", null));
    this.loadCategories();
  }

  /**
   * Get the categories.
   */
  loadCategories(): void {
    this.categoryService.getCategories()
      .then(value => this.categories = value);
    this.error = "";
  }

  /**
   * Add the category.
   */
  addCategory() {
    let path = this.path;
    let categoryParam = this.categoryParam;
    categoryParam.id = path[path.length - 1].id;
    this.categoryService.addCategory(this.categoryParam, (message, result) => {
      if (result) {
        categoryParam.name = '';
        categoryParam.description = '';
        categoryParam.id = '';
        this.error = '';
        this.label = false;
        this.refreshFor(this.getLastPathElement().id);
      } else {
        this.error = message;
      }
    });
  }

  /**
   * Delete the category.
   *
   * @param {string} id the id of the category.
   */
  deleteCategory(id: string) {
    this.categoryService.removeCategory(id, (message, result) => {
      if (result) {
        this.refreshFor(this.getLastPathElement().id);
      } else {
        this.error = message;
      }
    });
  }

  /**
   * Load the children.
   *
   * @param {string} name the name of the category.
   * @param {string} id the id of the category.
   */
  loadChildren(name: string, id: string) {
    this.categoryService.getChildren(id)
      .then(value => {
        this.categories = value;
        this.path.push(new CategoryComponent(name, id));
        this.error = "";
      });
  }

  /**
   * Refreshing value of this._categories for the id.
   *
   * @param {string} id the id of the category.
   */
  refreshFor(id: string) {
    if (id == null) {
      this.loadCategories();
      this.error = "";
    } else {
      this.categoryService.getChildren(id)
        .then(value => this.categories = value);
    }
  }

  /**
   * The method switch value of the label.
   */
  switchLabel() {
    this.label = !this.label;
    let categoryParam = this.categoryParam;
    categoryParam.name = '';
    categoryParam.description = '';
    this.error = "";
  }

  /**
   * Get the last element of the this._path.
   *
   * @returns {CategoryComponent} the last component.
   */
  getLastPathElement(): CategoryComponent {
    return this.path[this.path.length - 1];
  }

  /**
   * Set the current top of path.
   *
   * @param {string} componentId the top component id.
   */
  setTopOfPath(componentId: string) {
    for (let i = this.path.length - 1; i >= 0; i--) {
      let component = this.path[i];
      if (component.id != componentId) {
        this.path.pop();
      } else {
        this.refreshFor(this.getLastPathElement().id);
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
    return this._label;
  }

  /**
   * Set the add trigger.
   *
   * @param {boolean} value the trigger.
   */
  set trigger(value: boolean) {
    this._label = value;
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

  /**
   * Get the label.
   *
   * @returns {boolean} the label.
   */
  get label(): boolean {
    return this._label;
  }

  /**
   * Set the label.
   *
   * @param {boolean} value the label.
   */
  set label(value: boolean) {
    this._label = value;
  }
}
