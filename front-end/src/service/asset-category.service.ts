import {Injectable} from '@angular/core';
import {AssetCategoryEntity} from "../model/entity/asset-category-entity";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Utils} from "../util/utils";
import {AssetCategoryParam} from "../model/category/asset-category-param";
import {URLSearchParams} from "@angular/http";
import {SecurityService} from "./security.service";

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
    return this.http.get(AssetCategoryService.GET_CATEGORIES_URL)
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
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    this.http.get(AssetCategoryService.REMOVE_CATEGORY_URL, {search: params})
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public getChildrenCategories(parentId: string): Promise<AssetCategoryEntity[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', parentId);
    return this.http.get(AssetCategoryService.GET_CHILD_CATEGORIES, {search: params})
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
