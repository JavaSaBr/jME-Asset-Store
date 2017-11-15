import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AssetCategoryEntity} from "../../../../model/entity/asset-category-entity";

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  @Input() nodes: AssetCategoryEntity[];
  @Input() selectNode: AssetCategoryEntity;

  @Output() onSelectedChanged: EventEmitter<AssetCategoryEntity> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {

  }

  onSelectNode(node: AssetCategoryEntity) {
    this.onSelectedChanged.emit(node);
  }

}
