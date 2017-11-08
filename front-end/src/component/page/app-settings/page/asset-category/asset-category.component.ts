import {Component, OnInit} from '@angular/core';
import {AssetCategoryEntity} from "../../../../../model/entity/asset-category-entity";
import {CategoryComponent} from "../../../../../model/category/category-component";

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

  private categories: Promise<AssetCategoryEntity[]>;

  constructor() {
    this._path = [];
    this._path.push(new CategoryComponent("root", null));
  }

  ngOnInit() {
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

}
