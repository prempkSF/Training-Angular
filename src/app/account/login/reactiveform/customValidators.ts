import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

// Custom password strength validator
export function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
      const valid = specialCharPattern.test(control.value);
      return valid ? null : { weakPassword: { value: control.value } };
    };
  }