import {Injectable} from "@angular/core";
import {Http, RequestOptions, ResponseContentType, Headers} from "@angular/http";
import {AssetParams} from "../../model/params/asset-params";
import {Utils} from "../../util/utils";
import {AssetEntity} from "../../model/entity/asset-entity";
import {SecurityService} from "../security.service";
import {FileTypeEntity} from "../../model/entity/file-type-entity";

@Injectable()
export class AssetService {

  public static readonly ADD_ASSET_URL: string = "/api/assets/add/asset";
  public static readonly USERS_ASSETS: string = "/api/assets/get/assets";
  public static readonly GET_ASSET: string = "/api/assets/asset";
  public static readonly DOWNLOAD_ASSET: string = "/api/assets/download/";
  public static readonly CATEGORY_ASSETS: string = "/api/assets/category/";
  public static readonly ALL_ASSETS: string = "/api/assets";
  public static readonly FILES_LIST: string = "/api/assets/files/";

  constructor(private readonly http: Http, private securityService: SecurityService) {
  }

  public createAsset(asset: AssetParams, file: File, handler: (message: string, result: boolean, warnings: string[]) => void) {
    var options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    var formData = new FormData()
    formData.append('file', file);
    formData.append('asset', new Blob([JSON.stringify({
        "name": asset.name,
        "description": asset.description,
        "id": asset.id,
        "categoryId": asset.category_id
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

  public loadAllAssets(): Promise<AssetEntity[]> {
    return this.http.get(AssetService.ALL_ASSETS)
      .toPromise()
      .then(response => response.json())
      .catch(error => Utils.handleError(error));
  }

  public loadCategoryAssets(id: string): Promise<AssetEntity[]> {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.appendAccessToken(options);
    return this.http.get(AssetService.CATEGORY_ASSETS + id, options)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
      .catch(error => Utils.handleError(error));
  }

  public loadAsset(id: number, handler: (message: string, result: AssetEntity) => void) {
    let options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.get(AssetService.GET_ASSET + "/" + id, options)
      .toPromise().then(value => handler(null, value.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }

  public downloadAsset(id: number, handler: (message: string, file: Blob) => void) {
    let options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    options.responseType = ResponseContentType.Blob;
    this.http.get(AssetService.DOWNLOAD_ASSET + id.toString(), options)
      .toPromise()
      .then(value => handler(null, value.blob()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }

  public getFiles(id: number, handler: (message: string, result: FileTypeEntity[]) => void) {
    let options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.get(AssetService.FILES_LIST + "/" + id.toString(), options)
      .toPromise()
      .then(result => handler(null, result.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }

  public removeAsset(id: number, handler: (message: string, result: boolean) => void) {
    let options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.delete(AssetService.GET_ASSET + "/" + id.toString(), options)
      .toPromise()
      .then(value => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)))
  }
}
