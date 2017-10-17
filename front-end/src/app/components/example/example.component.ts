import {Component} from '@angular/core';
import 'rxjs/add/observable/of';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-example',
  styleUrls: ['example.component.css'],
  templateUrl: './example.component.html',

})
export class ExampleComponent {

  mathOperations = new FormControl();
  mathOperationsList = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Pow'];

}



