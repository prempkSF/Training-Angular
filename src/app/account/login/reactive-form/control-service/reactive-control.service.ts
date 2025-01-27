import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Login } from '../class/login-baseclass';
@Injectable({
  providedIn: 'root'
})
export class ReactiveControlService {
  
  toFormGroup(questions: Login<string>[]) {
    const group: any = {};
    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
