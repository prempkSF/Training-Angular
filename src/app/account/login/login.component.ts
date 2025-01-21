import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {
  name: string = "";
  constructor() {

  }
 
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    setInterval(() => {
      this.name ="Prem";
      console.log(this.name)
    }, 2000)
  }

}
