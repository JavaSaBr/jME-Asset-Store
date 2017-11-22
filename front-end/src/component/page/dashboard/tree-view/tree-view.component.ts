import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AssetCategoryEntity} from "../../../../model/entity/asset-category-entity";

/**
 * Implementation of recursion for asset categories.
 *
 * @author Andrei Yunkevich.
 */
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  /**
   * The category.
   */
  @Input() nodes: AssetCategoryEntity[];

  /**
   * The asset category.
   */
  @Input() selectNode: AssetCategoryEntity;

  /**
   * The asset category
   *
   * @type {EventEmitter<any>} AssetCategoryEntity
   */
  @Output() onSelectedChanged: EventEmitter<AssetCategoryEntity> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  /**
   * Get asset category.
   *
   * @param {AssetCategoryEntity} node the asset category
   */
  onSelectNode(node: AssetCategoryEntity) {
    this.onSelectedChanged.emit(node);
  }

}
