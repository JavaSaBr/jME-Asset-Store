import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {AssetParams} from "../../model/params/asset-params";
import {Utils} from "../../util/utils";
import {AssetEntity} from "../../model/entity/asset-entity";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AssetService {

  public static readonly ADD_ASSET_URL: string = "/api/assets/add/asset";

  public static readonly USERS_ASSETS: string = "/api/assets/get/assets";

  public static UPLOAD_FILE: string = "/api/assets/add/file";

  constructor(private httpClient: HttpClient, private readonly http: Http) {
  }

  public create(asset: AssetParams, handler: (message: string) => void): void {
    this.http.post(AssetService.ADD_ASSET_URL, asset)
      .toPromise()
      .then(response => handler("success"))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex)));
  }

  public getAssets(): Promise<AssetEntity[]> {
    return this.http.post(AssetService.USERS_ASSETS, null)
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

    const req = new HttpRequest('POST', AssetService.UPLOAD_FILE, formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.httpClient.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.httpClient.get('/getallfiles')
  }
}
