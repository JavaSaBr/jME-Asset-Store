import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  styleUrls: ['math.component.css'],
  templateUrl: './math.component.html'
})
export class MathComponent {
  condition: boolean=false;
  firstNumber: number;
  secondNumber: number;

  toggle(){
    this.condition = !this.condition;
  }

}
