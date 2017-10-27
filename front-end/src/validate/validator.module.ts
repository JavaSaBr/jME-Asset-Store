import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EqualsValidatorDirective} from "./equalsValidatorDerective";



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EqualsValidatorDirective,

  ],
  exports: [
    EqualsValidatorDirective,
    CommonModule
  ]
})
export class ValidatorModule {
}
