import {Injectable} from '@angular/core';
import {AssetCategoryEntity} from "../model/entity/asset-category-entity";
import {Http} from "@angular/http";
import {Utils} from "../util/utils";
import {AssetCategoryParam} from "../model/category/asset-category-param";

/**
 * The asset category service.
 *
 * @author Denis Lesheniuk.
 */
@Injectable()
export class AssetCategoryService {

  private static readonly GET_CATEGORIES_URL = "api/app-settings/asset-category/all-categories";
  private static readonly ADD_CATEGORY_URL = "api/app-settings/asset-category/add-category";
  private static readonly REMOVE_CATEGORY_URL = "";
  private static readonly GET_CHILD_CATEGORIES = "";

  constructor(private readonly http: Http) {
  }

  public getCategories(): Promise<AssetCategoryEntity[]> {
    return this.http.get(AssetCategoryService.GET_CATEGORIES_URL)
      .toPromise()
      .then(responce => {
        let body = responce.json();
        return body;
      })
      .catch(this.handleError);
  }

  public addCategory(assetCategoryParam: AssetCategoryParam,
                     handler: (message: string, result: boolean) => void) {
    this.http.post(AssetCategoryService.ADD_CATEGORY_URL, assetCategoryParam)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public removeCategory(parentID: string, handler: (message: string, result: boolean) => void) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', parentID);
    this.http.get(AssetCategoryService.REMOVE_CATEGORY_URL, {search: params})
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public getChildCetegories(parentId: string): Promise<AssetCategoryEntity[]> {
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
