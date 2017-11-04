import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FileTypes} from "../../../../../model/file-types/file-types";

/**
 * @author Alena Solonevich
 */
@Component({
  selector: 'app-file-types',
  templateUrl: './file-types.component.html',
  styleUrls: ['./file-types.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: true,
})
export class FileTypesComponent implements OnInit {

  constructor(fileTypes: FileTypes) {
  }

  ngOnInit() {
  }
}
