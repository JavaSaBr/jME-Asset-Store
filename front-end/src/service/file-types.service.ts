import {Injectable} from '@angular/core';
import {FileTypeEntity} from "../model/entity/file-type-entity";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Utils} from "../util/utils";
import {FileTypeParams} from "../model/entity/file-type-params.component";
import {SecurityService} from "./security.service";
import {Router} from "@angular/router";

@Injectable()
export class FileTypesService {

  private static readonly ADD_FILE_TYPE_URL = '/api/file-types/add';
  private static readonly LOAD_FILE_TYPE_URL = '/api/file-types/get/all';

  constructor(private readonly http: Http, private readonly security: SecurityService) {
  }

  public createFileType(fileTypeParams: FileTypeParams, handler: (message: string, result: boolean) => void): void {

    let options = new RequestOptions();
    this.security.addAccessToken(options);
    this.http.post(FileTypesService.ADD_FILE_TYPE_URL, fileTypeParams)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public loadFileTypes(): Promise<FileTypeEntity[]> {
    let options = new RequestOptions();
    this.security.addAccessToken(options);
    return this.http.get(FileTypesService.LOAD_FILE_TYPE_URL)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
      .catch(this.hadlerError);
  }

  private hadlerError(error: Response | any) {
    return Promise.reject(error.message || error)
  }

}
