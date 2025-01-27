import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './reactive-form/class/login-baseclass';
import { FormGroup } from '@angular/forms';
import { ReactiveControlService } from './reactive-form/control-service/reactive-control.service';
import { Observable } from 'rxjs/internal/Observable';
import { ReactiveFormService } from './reactive-form/service/reactive-form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  islogin: boolean = false;

  
  questions$: Observable<Login<any>[]>;
  constructor(private router: Router,service: ReactiveFormService) {
    this.questions$ = service.getTextBox();
  }

  // @Input() questions: Login<string>[] | null = [];
  // form!: FormGroup;
  // payLoad = '';
  // ngOnInit() {
  //   this.form = this.qcs.toFormGroup(this.questions as Login<string>[]);
  // }
  // onSubmit() {
  //   this.payLoad = JSON.stringify(this.form.getRawValue());
  // }

  @ViewChild('username') username?: ElementRef;
  @ViewChild('password') password?: ElementRef;
  login() {

    if (this.username!.nativeElement.value == localStorage.getItem('username') && this.password!.nativeElement.value == localStorage.getItem('password')) {
      localStorage.setItem('loginTrue', 'true');
      this.router.navigate(['account/product']);
    }
    else {
      localStorage.setItem('loginTrue', 'false');
      alert("Username Password Incorrect");
    }
  }
}
