import {Component, OnInit} from '@angular/core';
import {AssetCategoryEntity} from "../../../../model/entity/asset-category-entity";
import {AssetCategoryService} from "../../../../service/asset-category.service";

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.component.html',
  styleUrls: ['./browsing.component.css']
})
export class BrowsingComponent implements OnInit {

  categories: AssetCategoryEntity[];
  selectNode: AssetCategoryEntity;

  constructor(private readonly categoryService: AssetCategoryService) {

  }

  ngOnInit() {
    this.loadCategories();
  }

  /**
   * Get the categories.
   */
  loadCategories(): void {
    this.categoryService.getCategories()
      .then(value => this.categories = value);
  }

  onSelectNode(node: AssetCategoryEntity) {
    this.selectNode = node;
  }

  write(): string {
    if (this.selectNode == null) {
      return 'bad';
    }
    return this.selectNode.name;
  }

}
