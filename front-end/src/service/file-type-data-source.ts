import {Injectable} from "@angular/core";
import {FileTypeEntity} from "../model/entity/file-type-entity";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {FileTypesService} from "./file-types.service";
import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";

@Injectable()
export class FileTypeDataSource extends DataSource<FileTypeEntity> {

  private fileTypes: BehaviorSubject<FileTypeEntity[]>;

  constructor(private readonly fileTypesService: FileTypesService) {
    super();
    let emptyArray: FileTypeEntity[] = [];
    this.fileTypes = new BehaviorSubject(emptyArray);
  }

  ngOnInit() {
  }

  public refresh() {
    this.fileTypesService.loadFileTypes().then(value => {
      this.fileTypes.next(value);
    })
  }

  connect(): Observable<FileTypeEntity[]> {
    return this.fileTypes;
  }

  disconnect() {
  }
}
