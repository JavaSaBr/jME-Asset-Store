import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, RequestMethod} from "@angular/http";
import {AssetParams} from "../../model/params/asset-params";
import {Utils} from "../../util/utils";
import {AssetEntity} from "../../model/entity/asset-entity";
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {SecurityService} from "../security.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class AssetService {

  public static readonly ADD_ASSET_URL: string = "/api/assets/add/asset";

  public static readonly USERS_ASSETS: string = "/api/assets/get/assets";

  public static UPLOAD_FILE: string = "/api/assets/add/file";

  public static GET_ASSET: string = "/api/assets/asset";

  public currentAsset: BehaviorSubject<AssetEntity> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient, private readonly http: Http, private securityService: SecurityService) {
  }

  public createAsset(asset: AssetParams, handler: (message: string, result: boolean) => void) {
    var options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.post(AssetService.ADD_ASSET_URL, asset, options)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public getAssets(handler: (message: string, files: AssetEntity[])=> void){
    let options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.get(AssetService.USERS_ASSETS, options)
      .toPromise()
      .then(value => handler(null,value.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }

  public loadFileToAsset(file: File, handler: (message:string)=>void) {
    let formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('type_id', '1');

    var options = new RequestOptions();
    this.securityService.appendAccessToken(options);
    this.http.post(AssetService.UPLOAD_FILE, formData, options)
      .toPromise()
      .then(value => handler("success"))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex)));
  }

  public loadAsset(id: number, handler: (message: string, result: AssetEntity) => void) {
    this.http.get(AssetService.GET_ASSET + "/" + id, this.securityService.appendAccessToken())
      .toPromise().then(value => handler(null, value.json()))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, null)));
  }
}
