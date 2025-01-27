import { Injectable } from '@angular/core';
import { TextBoxInput } from '../class/textbox';
import {of} from 'rxjs';
import { Login } from '../class/login-baseclass';
@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  getTextBox()
  {
    const textBoxes : Login<string>[] = [
      new TextBoxInput(
        {
          key: 'firstName',
          label: 'First name',
          value: 'Alex',
          required: true,
          order: 1,
        }
      ),
      new TextBoxInput(
        {
          key: 'password',
          label: 'Password',
          required: true,
          order: 2,
        }
      ),
    ];
    return of(textBoxes.sort((a, b) => a.order - b.order));
  }
}
