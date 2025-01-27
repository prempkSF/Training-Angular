import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',

})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {

  }
  onSubmit() {
    // this.submitted = true;
    console.log(this.username, this.password);
    if (this.username! == localStorage.getItem('username') && this.password! == localStorage.getItem('password')) {
      localStorage.setItem('loginTrue', 'true');
      this.router.navigate(['account/product']);
    }
    else {
      localStorage.setItem('loginTrue', 'false');
      alert("Username Password Incorrect");
    }
  }
}
