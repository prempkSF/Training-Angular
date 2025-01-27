import { Login } from "./login-baseclass";

export class TextBoxInput extends Login<string> {
  override controlType = 'textbox';
}