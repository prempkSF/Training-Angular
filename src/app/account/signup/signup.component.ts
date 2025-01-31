import { Component, ViewChild } from '@angular/core';
import { TextBox } from '@syncfusion/ej2-angular-inputs'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss',]
})
export class SignupComponent {

  @ViewChild('username') username!: TextBox;
  @ViewChild('password') password?: TextBox;
  @ViewChild('email') email!: TextBox;
  @ViewChild('number') mobileNumber?: TextBox;
  signUpBtn?: boolean = true;
  public countriesData: Object[] = [
    { Id: 'Asia', Continent: 'India' },
    { Id: 'Antartica', Continent: 'Antartica' },
    { Id: 'North America', Continent: 'USA' },
    { Id: 'Europe', Continent: 'London' },
    { Id: 'Saudhi', Continent: 'Dubai' },
    { Id: 'Australia', Continent: 'Sydney' },
  ];
  public valueCountry: string = "";
  public fieldsCountry: Object = { text: 'Continent', value: 'Id' };

  changeBool()
  {
    this.signUpBtn = false;
  }
  submit() {
    if (this.username?.value == "" || this.email.value == "" || this.mobileNumber?.value == "" || this.valueCountry == "") {

      this.signUpBtn = true;
    }
    else {
      this.signUpBtn = false;
      localStorage.setItem('username', this.username!.value);
      localStorage.setItem('password', this.password!.value);
      localStorage.setItem('email', this.email!.value);
      localStorage.setItem('phNumber', this.mobileNumber!.value);
      localStorage.setItem("country", this.valueCountry);
      alert("Sign Up Sucessful");
      
    }

  }

}
