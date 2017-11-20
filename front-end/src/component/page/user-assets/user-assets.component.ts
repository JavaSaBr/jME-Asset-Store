import {Component} from "@angular/core";
import {AssetService} from "../../../service/asset/asset.service";
import {Router} from '@angular/router';
import {PageComponent} from "../../page.component";
import {AssetEntity} from "../../../model/entity/asset-entity";
import {UserService} from "../../../service/user-service";
import {AssetDataSource} from "../../../service/asset/asset-data-source";
import {FileTypeEntity} from "../../../model/entity/file-type-entity";
import {saveAs} from 'file-saver/FileSaver'


@Component({
  moduleId: module.id,
  selector: 'app-user-assets-asset',
  templateUrl: './user-assets.component.html',
  providers: [AssetService, UserService, AssetDataSource],
  styleUrls: ['./user-assets.component.css']
})

export class UserAssetsComponent extends PageComponent {

  private _error: string;
  private _assets: AssetEntity[];
  private _files: FileTypeEntity[];
  private _showFiles: boolean;
  private file: Blob;


  constructor(private readonly assetService: AssetService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.loadAssets();
    this.showFiles = false;
  }

  createAsset() {
    this.router.navigateByUrl("/create-asset", {replaceUrl: true});
  }

  loadAssets(): void {
    this.assetService.loadAssets((message, assets) => {
      if (message == null) {
        this._assets = assets;
      }
    })
  }

  toAsset(id: number) {
    this.router.navigate(['/assets', id]);
  }

  downloadAsset(id: number, name: string){
    this.assetService.downloadAsset(id,(message, file) =>{
      if(message == null) {
        saveAs(file, name)
      }
    })
  }

  get error() {
    return this._error;
  }

  set error(error: string) {
    this._error = error;
  }


  get assets(): AssetEntity[] {
    return this._assets;
  }

  set assets(value: AssetEntity[]) {
    this._assets = value;
  }

  get files(): FileTypeEntity[] {
    return this._files;
  }

  set files(value: FileTypeEntity[]) {
    this._files = value;
  }

  get showFiles(): boolean {
    return this._showFiles;
  }

  set showFiles(value: boolean) {
    this._showFiles = value;
  }

  loadFiles(id: number) {
    this.assetService.getFiles(id, (message, result) => {
      if (message == null) {
        this._files = result;
        this.showFiles = true;
      }
    })
  }

  hideFiles(showFiles: boolean) {
    this.showFiles = showFiles;
  }
}
