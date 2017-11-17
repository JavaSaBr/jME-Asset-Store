import {Component, ViewChild} from "@angular/core";
import {Router} from '@angular/router';
import {AssetService} from "../../../service/asset/asset.service";
import {PageComponent} from "../../page.component";
import {AssetParams} from "../../../model/params/asset-params";
import {ChooseAssetCategoryComponent} from "../choose-asset-category/choose-asset-category.component";
import {CategoryComponent} from "../../../model/category/category-component";

@Component({
  moduleId: module.id,
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  providers: [AssetService],
  styleUrls: ['./create-asset.component.css']
})

export class AddAssetComponent extends PageComponent {

  /**
   * The category path.
   */
  private _path: CategoryComponent[];

  private _info: AssetParams;

  private _message: string;

  private _file: File;

  myId: number = 0;

  viewCategory: boolean;

  @ViewChild(ChooseAssetCategoryComponent) category: ChooseAssetCategoryComponent;

  constructor(private readonly router: Router, private assetService: AssetService) {
    super();
    this._message = '';
    this._info = new AssetParams("", "", 0,0);
    this.viewCategory = false;
  }

  tryCreate() {
    console.log(this._info);
    this.assetService.createAsset(this._info, this._file, (message, result, warnings) => {
      this._message = message;
      if (warnings != null)
        warnings.forEach(warning => console.log(warning))
      if (result) {
        this.router.navigateByUrl('/user-assets');
      }
    });

  }

  selectFile(event) {
    this._file = event.target.files[0];
  }


  get info(): AssetParams {
    return this._info;
  }

  set info(value: AssetParams) {
    this._info = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }


  get file(): File {
    return this._file;
  }

  set file(value: File) {
    this._file = value;
  }

  private isValid(): boolean {
    return this.info.name.length > 0 && this.info.description.length > 0 && this._file != null;
  }

  private chooseCategory() {
    this.router.navigateByUrl("/choose-asset-category");
  }

  onChanged(path: any) {
    this._path = path;
    this.viewCategory = !this.viewCategory;
    this._info.category_id = path[path.length - 1].id;
    this.myId = this._info.category_id;
  }

  changeViewCategory() {
    this.viewCategory = !this.viewCategory;
  }
}
