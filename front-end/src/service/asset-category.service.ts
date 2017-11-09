import {Injectable} from '@angular/core';
import {AssetCategoryEntity} from "../model/entity/asset-category-entity";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Utils} from "../util/utils";
import {AssetCategoryParam} from "../model/category/asset-category-param";

import {SecurityService} from "./security.service";


/**
 * The asset category service.
 *
 * @author Denis Lesheniuk.
 */
@Injectable()
export class AssetCategoryService {

  /**
   * The url to categories controller.
   *
   * @type {string}
   */
  private static readonly API_ASSETS_CATEGORIES = "api/asset-categories";

  constructor(private readonly http: Http, private readonly securityService: SecurityService) {
  }

  /**
   * The function to get all categories from server.
   *
   * @returns {Promise<AssetCategoryEntity[]>} the all categories.
   */
  public getCategories(): Promise<AssetCategoryEntity[]> {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    return this.http.get(AssetCategoryService.API_ASSETS_CATEGORIES, options)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
      .catch(this.handleError);
  }

  /**
   * The function to put the category to the server.
   *
   * @param {AssetCategoryParam} params the asset category param.
   * @param {(message: string, result: boolean) => void} handler the handler result of putting.
   */
  public addCategory(params: AssetCategoryParam,
                     handler: (message: string, result: boolean) => void) {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    this.http.put(AssetCategoryService.API_ASSETS_CATEGORIES + "/put", params, options)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  /**
   * The function to remove the category from server.
   *
   * @param {string} id the category id.
   * @param {(message: string, result: boolean) => void} handler the hundler result of removig
   */
  public removeCategory(id: string, handler: (message: string, result: boolean) => void) {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    this.http.delete(AssetCategoryService.API_ASSETS_CATEGORIES + '/' + id, options)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public getChildrenCategories(id: string): Promise<AssetCategoryEntity[]> {
    var options = new RequestOptions({headers: new Headers()});
    this.securityService.addAccessToken(options);
    return this.http.get(AssetCategoryService.API_ASSETS_CATEGORIES + "/" + id, options)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }


}
