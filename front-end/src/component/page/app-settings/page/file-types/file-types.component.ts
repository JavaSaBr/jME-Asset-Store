import {Component, Injectable, ViewEncapsulation} from '@angular/core';
import {FileTypesService} from "../../../../../service/file-types.service";
import {PageComponent} from "../../../../page.component";
import {DataSource} from "@angular/cdk/collections";
import {FileTypeEntity} from "../../../../../model/entity/file-type-entity";
import 'rxjs/add/observable/of';
import {FileTypeDataSource} from "../../../../../service/file-type-data-source";

/**
 * @author Alena Solonevich
 */
@Component({
  selector: 'app-file-types',
  templateUrl: './file-types.component.html',
  styleUrls: ['./file-types.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: true,
  providers:[FileTypeDataSource]
})
export class FileTypesComponent extends PageComponent {
  displayedColumns = ['name', 'mimeType', 'extension'];
  dataSource: DataSource<FileTypeEntity>;

  constructor(private readonly fileTypesService: FileTypesService,
              private readonly fileTypeDataSource: FileTypeDataSource) {
    super();
    this.dataSource = this.fileTypeDataSource;
    this.fileTypeDataSource.refresh();
  }
}


