import {PageComponent} from "../../../../../page.component";
import {FileTypesService} from "../../../../../../service/file-types.service";
import {Router} from "@angular/router";
import {Component} from "@angular/core";
import {FileTypeParams} from "../../../../../../model/entity/file-type-params.component";
import {RouteList} from "../../../../../../util/route-list";
import {FileTypeDataSource} from "../../../../../../service/file-type-data-source";

@Component({
  selector: 'app-settings-add-file-type',
  templateUrl: './add-file-type.component.html',
  styleUrls: ['./add-file-type.component.css']
})
export class AddFileTypeComponent extends PageComponent {

  /**
   * The current create file type fileTypesInfo.
   */
  private _fileTypeInfo: FileTypeParams;

  /**
   * The error message.
   */
  private _error: string;

  constructor(private readonly fileTypesService: FileTypesService,
              private readonly fileTypeDataSource: FileTypeDataSource,
              private readonly router: Router) {
    super();
    this._fileTypeInfo = new FileTypeParams('', '', '');
    this._error = '';
  }

  /**
   * Try to create new file type using the current fileTypesInfo.
   */
  tryCreateFileType() {
    this.fileTypesService.createFileType(this._fileTypeInfo, (message, result) => {
      if (result) {
        let fileTypeInfo = this.fileTypeInfo;
        fileTypeInfo.name = '';
        fileTypeInfo.mimeType = '';
        fileTypeInfo.extension = '';
        this._error = '';
        this.fileTypeDataSource.refresh();
        this.redirectToFileTypesPage();
      } else {
        this._error = message;
      }
    });
  }

  /**
   * The method to redirect to File Types Page
   */
  redirectToFileTypesPage() {
    this.router.navigateByUrl(RouteList.PAGE_APP_SETTINGS + '/' + RouteList.PAGE_FILE_TYPES);
  }

  /**
   * Gets the file type Info.
   *
   * @param {FileTypeEntity} value
   */
  get fileTypeInfo(): FileTypeParams {
    return this._fileTypeInfo;
  }

  /**
   * Sets the file type Info.
   *
   * @param {FileTypeEntity} value
   */
  set fileTypeInfo(value: FileTypeParams) {
    this._fileTypeInfo = value;
  }

  /**
   * Gets the error.
   *
   * @returns {string}
   */
  get error(): string {
    return this._error;
  }

  /**
   * Sets the error.
   *
   * @param {string} value
   */
  set error(value: string) {
    this._error = value;
  }
}
