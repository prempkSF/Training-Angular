import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordStrengthValidator } from './customValidators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent implements OnInit{
  loginForm!: FormGroup;

  containerTrue:boolean = true;

  onclick()
  {
    this.containerTrue=!this.containerTrue;
  }
  formFields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      validators: [Validators.required, Validators.minLength(4)],
      errorMessages: {
        required: 'Username is required.',
        minlength: 'Username must be at least 4 characters long.'
      }
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      validators: [Validators.required, Validators.minLength(4), passwordStrengthValidator()],
      errorMessages: {
        required: 'Password is required.',
        minlength: 'Password must be at least 4 characters long.',
        weakPassword: 'Password must contain at least one special character.'
      }
    },
    {
      name: 'designation',
      label: 'Designation',
      type: 'select',
      validators: [Validators.required],
      options: [
        { value: 'Software Engineer', label: 'Software Engineer' },
        { value: 'Team Lead', label: 'Team Lead' },
        { value: 'Manager', label: 'Manager' }
      ],
      errorMessages: {
        required: 'Designation is required.'
      }
    }
  ];

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    // Initialize the form group with controls based on the formFields configuration
    const controls :{ [key: string]: any } = {};
    this.formFields.forEach(field => {
      controls[field.name] = ['', field.validators];
    });

    this.loginForm = this.fb.group(controls);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.controls['username'].value == localStorage.getItem('username') && this.loginForm.controls['password'].value == localStorage.getItem('password')) {
        localStorage.setItem('loginTrue', 'true');
        this.router.navigate(['account/product']);
      }
      else {
        localStorage.setItem('loginTrue', 'false');
        alert("Username Password Incorrect");
      }
    } else {
      console.log('Form is invalid');
    }
  }
}


