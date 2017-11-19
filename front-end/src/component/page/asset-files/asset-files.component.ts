import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import {FileEntity} from "../../../model/entity/file-entity";

@Component({
  selector: 'app-asset-files',
  templateUrl: './asset-files.component.html',
  styleUrls: ['./asset-files.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssetFilesComponent implements OnInit {

  @Input() files: FileEntity[];

  constructor() { }

  ngOnInit() {
  }

  @Output() onChanged = new EventEmitter<boolean>();
  hideFiles(){
    this.onChanged.emit(false);
  }
}
