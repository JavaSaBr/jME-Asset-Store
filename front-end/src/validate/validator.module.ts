import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EqualsValidatorDirective} from "./equals-validator.derective";
import {EmailValidatorDirective} from "./email-validator.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EqualsValidatorDirective,
    EmailValidatorDirective

  ],
  exports: [
    EqualsValidatorDirective,
    EmailValidatorDirective,
    CommonModule
  ]
})
export class ValidatorModule {
}
