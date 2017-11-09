import {Injectable} from '@angular/core';
import {AssetCategoryEntity} from "../model/entity/asset-category-entity";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Utils} from "../util/utils";
import {AssetCategoryParam} from "../model/category/asset-category-param";
import {URLSearchParams} from "@angular/http";
import {SecurityService} from "./security.service";
import * as Url from "url";

/**
 * The asset category service.
 *
 * @author Denis Lesheniuk.
 */
@Injectable()
export class AssetCategoryService {

  private static readonly GET_CATEGORIES_URL = "api/app-settings/asset-category/all-categories";
  private static readonly ADD_CATEGORY_URL = "api/app-settings/asset-category/add-category";
  private static readonly REMOVE_CATEGORY_URL = "api/app-settings/asset-category/delete-category";
  private static readonly GET_CHILD_CATEGORIES = "api/app-settings/asset-category/get-children";

  constructor(private readonly http: Http, private readonly securityService: SecurityService) {
  }

  public getCategories(): Promise<AssetCategoryEntity[]> {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    return this.http.get(AssetCategoryService.GET_CATEGORIES_URL, options)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
      .catch(this.handleError);
  }

  public addCategory(params: AssetCategoryParam,
                     handler: (message: string, result: boolean) => void) {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    this.http.post(AssetCategoryService.ADD_CATEGORY_URL, params, options)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public removeCategory(id: string, handler: (message: string, result: boolean) => void) {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    this.http.delete(AssetCategoryService.REMOVE_CATEGORY_URL + '${id}', options)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public getChildrenCategories(parentId: string): Promise<AssetCategoryEntity[]> {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    return this.http.get(AssetCategoryService.GET_CHILD_CATEGORIES + '${id}', options)
      .toPromise()
      .then(responce => {
        let body = responce.json();
        return body;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }


}
