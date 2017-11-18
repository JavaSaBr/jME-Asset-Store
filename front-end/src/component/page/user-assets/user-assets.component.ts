import {Component} from "@angular/core";
import {AssetService} from "../../../service/asset/asset.service";
import {Router} from '@angular/router';
import {PageComponent} from "../../page.component";
import {AssetEntity} from "../../../model/entity/asset-entity";
import {UserService} from "../../../service/user-service";
import {DataSource} from "@angular/cdk/collections";
import {AssetDataSource} from "../../../service/asset/asset-data-source";

@Component({
  moduleId: module.id,
  selector: 'app-user-assets-asset',
  templateUrl: './user-assets.component.html',
  providers: [AssetService, UserService, AssetDataSource],
  styleUrls: ['./user-assets.component.css']
})

export class UserAssetsComponent extends PageComponent {

  private _error: string;
  assets: AssetEntity[];
  private fileList: string[];


  constructor(private readonly assetService: AssetService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.loadAssets();
  }

  createAsset() {
    this.router.navigateByUrl("/create-asset", {replaceUrl: true});
  }

  loadAssets(): void {
    this.assetService.loadAssets((message, assets) => {
      if (message == null) {
        this.assets = assets;
      }
    })
  }

  toAsset(id: number) {
    this.router.navigate(['/assets', id]);
  }

  get error() {
    return this._error;
  }

  set error(error: string) {
    this._error = error;
  }

  loadFilesList(id: number){
    this.assetService.getFilesList(id, (message, result) =>{
      if(message == null){
        this.fileList = result;
      }
    })
  }

}
