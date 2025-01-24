import { Component, ViewChild } from '@angular/core';
import { dataSource, ProductOrder } from './dataSource';
import { FilterService, Grid, PageService, SortService } from '@syncfusion/ej2-angular-grids';

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
  
  @ViewChild('grid') grid!:Grid;
  dataSource: Object[] = dataSource;
  filterSettings: Object = { type: 'Excel' };
  sortSettings: Object = {
    columns: [
      { field: 'OrderDate', direction: 'Ascending' },
      { field: 'ProductID', direction: 'Ascending' }]
  };
  onDataReceived(data: ProductOrder) {
    // Add the new data to the grid
    this.dataSource.push(data);
    this.grid.refresh();

  }
}
