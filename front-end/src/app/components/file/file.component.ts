import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',

})
export class FileComponent {
  condition: boolean = false;
  toggle(){
    this.condition = !this.condition;
  }
}
