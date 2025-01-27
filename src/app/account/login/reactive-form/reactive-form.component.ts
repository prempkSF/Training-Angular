import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Login } from './class/login-baseclass';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  @Input() login!: Login<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.login.key].valid;
  }
}
