import { Component, ElementRef, ViewChild } from '@angular/core';
import { TextBox } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @ViewChild('inputValue') inputValue!: TextBox;

  textValue() {
    console.log(this.inputValue.value)
    if (this.inputValue.value) {
      localStorage.setItem('isValue', 'true');
    }
  }
}
