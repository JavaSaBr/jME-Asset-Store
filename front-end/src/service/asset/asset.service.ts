import {Injectable} from "@angular/core";
import {Http,RequestOptions} from "@angular/http";
import {AssetParams} from "../../model/params/asset-params";
import {Utils} from "../../util/utils";
import {AssetEntity} from "../../model/entity/asset-entity";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../security.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class AssetService {

  public static readonly ADD_ASSET_URL: string = "/api/assets/add/asset";

  public static readonly USERS_ASSETS: string = "/api/assets/get/assets";

  public static GET_ASSET: string = "/api/assets/asset";

  public currentAsset: BehaviorSubject<AssetEntity> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient, private readonly http: Http, private securityService: SecurityService) {
  }

  public createAsset(asset: AssetParams, file: File, handler: (message: string, result: boolean, warnings: string[]) => void) {
    var options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    var formData = new FormData()
    formData.append('file', file);
    formData.append('asset', new Blob([JSON.stringify({
        "name": asset.name,
        "description": asset.description,
        "id": asset.id
      })], {
        type: "application/json"
      }
    ));
    this.http.post(AssetService.ADD_ASSET_URL, formData, options)
      .toPromise()
      .then(response => handler(null, true, response.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false, null)));
  }

  public loadAssets(handler: (message: string, assets: AssetEntity[]) => void) {
    let options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.get(AssetService.USERS_ASSETS, options)
      .toPromise()
      .then(value => handler(null, value.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }

  public loadAsset(id: number, handler: (message: string, result: AssetEntity) => void) {
    this.http.get(AssetService.GET_ASSET + "/" + id, this.securityService.appendAccessToken())
      .toPromise().then(value => handler(null, value.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }
}
