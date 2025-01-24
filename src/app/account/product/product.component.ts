import { Component, ViewChild } from '@angular/core';
import { TextBox } from '@syncfusion/ej2-angular-inputs';
import { dataSource } from './dataSource';
import { FilterService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [
    PageService,
    SortService,
    FilterService
  ],
  
})
export class ProductComponent {
  @ViewChild('inputValue') inputValue!: TextBox;
  dataSource: Object[] = dataSource;
  filterSettings:Object ={ type: 'Excel' };
  sortSettings: Object = {
    columns: [
    { field: 'OrderDate', direction: 'Descending' },
    { field: 'ProductID', direction : 'Ascending'}]
  };
  
  textValue() {
    console.log(this.inputValue.value)
    if (this.inputValue.value) {
      localStorage.setItem('isValue', 'true');
    }
  }
}
