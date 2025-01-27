import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the form group with controls and validations
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]], // Required and minlength 4
      password: ['', [Validators.required, Validators.minLength(4),passwordStrengthValidator()]], // Required and minlength 4
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const valid = specialCharPattern.test(control.value);
    return valid ? null : { 'weakPassword': { value: control.value } };
  };
}
