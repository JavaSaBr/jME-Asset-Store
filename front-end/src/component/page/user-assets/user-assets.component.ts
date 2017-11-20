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

/**
 * Implementation of logic for UI for work with user's assets.
 *
 * @author Denis Lesheniuk.
 */
export class UserAssetsComponent extends PageComponent {

  /**
   * The error.
   */
  private _error: string;

  /**
   * The assets.
   */
  private _assets: AssetEntity[];

  /**
   * The files.
   */
  private _files: FileTypeEntity[];

  /**
   * The mark.
   */
  private _showFiles: boolean;

  constructor(private readonly assetService: AssetService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.loadAssets();
    this.showFiles = false;
  }

  /**
   * Create the asset.
   */
  createAsset() {
    this.router.navigateByUrl("/create-asset", {replaceUrl: true});
  }

  /**
   * Load the assets.
   */
  loadAssets(): void {
    this.assetService.loadAssets((message, assets) => {
      if (message == null) {
        this._assets = assets;
      }
    })
  }

  /**
   * Download the asset.
   *
   * @param {number} id the asset id.
   * @param {string} name the file name.
   */
  downloadAsset(id: number, name: string) {
    this.assetService.downloadAsset(id, (message, file) => {
      if (message == null) {
        saveAs(file, name)
      }
    })
  }

  /**
   * Delete the asset.
   *
   * @param {number} id the asset id.
   */
  deleteAsset(id: number) {
    this.assetService.removeAsset(id, (message, result) => {
      if (result) {
        this.loadAssets();
      } else {
        this.error = message;
      }
    })
  }

  /**
   *Load the files.
   *
   * @param {number} id the asset id.
   */
  loadFiles(id: number) {
    this.assetService.getFiles(id, (message, result) => {
      if (message == null) {
        this._files = result;
        this.showFiles = true;
      }
    })
  }

  /**
   * Hide the files container.
   *
   * @param {boolean} showFiles the mark.
   */
  hideFiles(showFiles: boolean) {
    this.showFiles = showFiles;
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
}
