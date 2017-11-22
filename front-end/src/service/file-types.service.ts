import {Injectable} from '@angular/core';
import {FileTypeEntity} from "../model/entity/file-type-entity";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Utils} from "../util/utils";
import {FileTypeParams} from "../model/entity/file-type-params.component";
import {SecurityService} from "./security.service";

@Injectable()
export class FileTypesService {

  private static readonly ADD_FILE_TYPE_URL = '/api/file-types/add';
  private static readonly LOAD_FILE_TYPE_URL = '/api/file-types';

  constructor(private readonly http: Http, private readonly security: SecurityService) {
  }

  public createFileType(fileTypeParams: FileTypeParams, handler: (message: string, result: boolean) => void): void {

    let options = new RequestOptions();
    this.security.appendAccessToken(options);
    this.http.post(FileTypesService.ADD_FILE_TYPE_URL, fileTypeParams)
      .toPromise()
      .then(response => handler(null, true))
      .catch(error => Utils.handleErrorMessageJson(error, (ex: string) => handler(ex, false)));
  }

  public loadFileTypes(): Promise<FileTypeEntity[]> {
    let options = new RequestOptions();
    this.security.appendAccessToken(options);
    return this.http.get(FileTypesService.LOAD_FILE_TYPE_URL, options)
      .toPromise()
      .then(response => {
        let body = response.json();
        return body;
      })
      .catch(this.hadnlerError);
  }

  private hadnlerError(error: Response | any) {
    return Promise.reject(error.message || error)
  }
}
