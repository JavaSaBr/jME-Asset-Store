import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, RequestMethod} from "@angular/http";
import {AssetParams} from "../../model/params/asset-params";
import {Utils} from "../../util/utils";
import {AssetEntity} from "../../model/entity/asset-entity";
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {SecurityService} from "../security.service";


@Injectable()
export class AssetService {

  public static readonly ADD_ASSET_URL: string = "/api/assets/add/asset";

  public static readonly USERS_ASSETS: string = "/api/assets/get/assets";

  public static UPLOAD_FILE: string = "/api/assets/add/file";

  public static GET_ASSET: string = "/api/assets/get/asset";

  constructor(private httpClient: HttpClient, private readonly http: Http, private securityService: SecurityService) {
  }

  public create(asset: AssetParams, handler: (message: string, result: boolean) => void): void {
    var options = new RequestOptions({
      method: RequestMethod.Post,
      url: AssetService.ADD_ASSET_URL,
      headers: new Headers()
    });
    this.securityService.addAccessToken(options);
    this.http.post(AssetService.ADD_ASSET_URL, asset, options)
      .toPromise()
      .then(response => handler("success", true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public getAssets(): Promise<AssetEntity[]> {
    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: AssetService.USERS_ASSETS,
      headers: new Headers()
    });
    this.securityService.addAccessToken(options);
    return this.http.get(AssetService.USERS_ASSETS,options)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
  }

  public loadFileToAsset(file: File): Observable<HttpEvent<{}>> {
    let formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('type_id','1');

    var options = new RequestOptions({
      method: RequestMethod.Post,
      url: AssetService.UPLOAD_FILE,
      headers: new Headers()
    });
    this.securityService.addAccessToken(options);

    const req = new HttpRequest('POST', AssetService.UPLOAD_FILE, formData, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders().append('X-Access-Token',options.headers.get('X-Access-Token'))
    });
    console.log(req);
    return this.httpClient.request(req);
  }

  getAsset(id: number): Promise<AssetEntity> {
    let formData: FormData = new FormData();
    formData.append('id',id.toString());

    let options = new RequestOptions({
      method: RequestMethod.Get,
      url: AssetService.GET_ASSET +"?id=" + id.toLocaleString(),
      headers: new Headers()
    });
    this.securityService.addAccessToken(options);
    return this.http.get(AssetService.GET_ASSET+"?id=" + id.toLocaleString(),options).toPromise()
      .then(response => {
        let body = response.json();
        console.log(body);
        return body;
      });
  }
}
