import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  islogin: boolean = false;
  constructor(private router: Router) {

  }
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
