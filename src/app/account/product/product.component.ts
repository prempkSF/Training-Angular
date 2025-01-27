import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { dataSource, ProductOrder } from './dataSource';
import { FilterService, Grid, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { Subscription } from 'rxjs';
import { DataCommunicationService } from '../data-communicate.service';

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
export class ProductComponent implements OnInit,OnDestroy{
  productStock!:number;
  constructor(private dataCommunicationService: DataCommunicationService) {}
  ngOnInit(): void {
    this.subscription.add(
      this.dataCommunicationService.grandparentData$.subscribe(data => {
        if (data) {
          console.log("Data from Grand Parent",data); // Add the received data to the dataSource array
          this.productStock=data;
        }
      })
    );
  }

  @ViewChild('grid') grid!: Grid;
  dataSource: Object[] = dataSource;
  filterSettings: Object = { type: 'Excel' };

  subscription: Subscription = new Subscription(); // Used to manage subscriptions
  
  sortSettings: Object = {
    columns: [
      { field: 'OrderDate', direction: 'Ascending' },
      { field: 'ProductID', direction: 'Ascending' }]
  };
  onDataReceived(data: ProductOrder) {
    // Add the new data to the grid
    data.Stock=this.productStock;
    this.dataSource.push(data);
    this.grid.refresh();

  }
  // Receive data from GrandchildDialog (via the Child Dialog)
  onGrandChildDataReceived(count: number) {
    console.log('Count from Grandchild Dialog:', count);
    // Handle the count data (e.g., display it somewhere or update grid data)
  }
  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
