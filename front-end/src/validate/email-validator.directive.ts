import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[isEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
/**
 * The implementation of {@link Validator} interface
 * provides method for custom form validation.
 *
 * @author Denis Lesheniuk.
 */
export class EmailValidatorDirective implements Validator {

  public constructor() {
  }

  /**
   * The implementation of custom validation for email validate.
   *
   * @param {AbstractControl} control
   * @returns {{[p: string]: any}} null if form is valid, if not - validation error.
   */
  public validate(control: AbstractControl): { [key: string]: any } {
    let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    let valid = emailRegEx.test(control.value);

    if (control.value < 1) {
      return null;
    } else
      return valid ? null : {'isEmail': true};
  }
}
