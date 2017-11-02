import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[equals]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EqualsValidatorDirective,
    multi: true
  }]
})
/**
 * The implementation of {@link Validator} interface
 * provides method for custom form validation.
 *
 * @author Denis Lesheniuk.
 */
export class EqualsValidatorDirective implements Validator {

  /**
   * The input param for [equals] directive.
   */
  @Input()
  private equals: string;

  /**
   * The implementation of custom validation for
   * comparing values of two fields .
   *
   * @param {AbstractControl} control is the form control.
   * @returns {{[p: string]: any}} null if form is valid, if not - validation error.
   */
  validate(control: AbstractControl): { [key: string]: any } {

    let value = control.value;
    let parent = control.parent;
    let targetControl = parent.get(this.equals);

    if (targetControl == null) return null;
    let result = value === targetControl.value;

    return result ? null : {this: {value}};
  }
}
