import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordValidation]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidationDirective,
      multi: true,
    },
  ],
})
export class PasswordValidationDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    const regex =
      /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (value) {
      const isValid = regex.test(value);

      if (!isValid) {
        return { passwordValidator: true };
      }
    }
    return null;
  }
}
