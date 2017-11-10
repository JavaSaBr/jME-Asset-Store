import {Component} from "@angular/core";
import {AssetService} from "../../../service/asset/asset.service";
import {Router} from '@angular/router';
import {PageComponent} from "../../page.component";
import {AssetEntity} from "../../../model/entity/asset-entity";
import {UserService} from "../../../service/user-service";

@Component({
  moduleId: module.id,
  selector: 'app-user-assets-asset',
  templateUrl: './user-assets.component.html',
  providers: [AssetService, UserService],
  styleUrls: ['./user-assets.component.css']
})

export class UserAssetsComponent extends PageComponent {

  constructor(private assetService: AssetService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.tryGetUsersAssets();
  }

  private _assets: AssetEntity[];
  private _error: string;

  tryGetUsersAssets(): void {
    this.assetService.getAssets((message, assets) => {
      if (message == null) {
        this.assets = assets;
      }
      else {
        this._error = message;
      }
    })
  }

  createAsset() {
    this.router.navigateByUrl("/create-asset", {replaceUrl: true});
  }

  toAsset(name: string, id: number) {
    this.router.navigate(['/assets', name],
      {
        queryParams: {
          'id': id
        }
      }
    );
  }

  get assets() {
    return this._assets;
  }

  set assets(assets: AssetEntity[]) {
    this._assets = assets;
  }

  get error() {
    return this._error;
  }

  set error(error: string) {
    this._error = error;
  }
}
