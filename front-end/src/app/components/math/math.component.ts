import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with custom trigger text */
@Component({
  selector: 'app-math',
  templateUrl: 'math.component.html',
  styleUrls: ['math.component.css'],
})
export class MathComponent {

  condition: boolean=false;
  firstNumber: number;
  secondNumber: number;

  toggle(){
    this.condition = !this.condition;
  }

}
