import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { dataSource, ProductOrder } from './dataSource';
import { FilterService, Grid, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { Subscription } from 'rxjs';
import { DataCommunicationService } from '../data-communicate.service';
import { ClickEventArgs, SidebarComponent } from '@syncfusion/ej2-angular-navigations';

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
export class ProductComponent implements OnInit, OnDestroy {
  @ViewChild('sidebarInstance')
  public sidebarInstance!: SidebarComponent;
  productStock!: number;
  @ViewChild('grid') grid!: Grid;
  dataSource: ProductOrder[] = dataSource;
  dataSourceStockLessTen: ProductOrder[] = dataSource.filter((product) => { return product.Stock < 10 });
  dataSourceStockLessFifty: ProductOrder[] = dataSource.filter((product) => { return product.Stock <= 100 && product.Stock >= 10 });
  dataSourceStockGreaterHundred: ProductOrder[] = dataSource.filter((product) => { return product.Stock >= 100 });
  public listFields: { [key: string]: Object } = { id: "id", text: "text" };
  gridShow: number = 0;

  filterSettings: Object = { type: 'Excel' };
  public ListData: { [key: string]: Object }[] = [
    {
      id: "1", text: "Less than 10"
    },
    {
      id: "2", text: "Less than 100"
    },
    {
      id: "3", text: "Greater than 100"
    },
  ];
  subscription: Subscription = new Subscription();
  toolbarCliked(args: ClickEventArgs) {
    if (args.item.tooltipText == "Menu") {
      this.sidebarInstance.toggle();
    }
  }
  OnSelect(args: any) {
    if (args.index == 0) {
      this.gridShow = GridEnum.ten;
      
    }
    else if (args.index == 1) {
      this.gridShow = GridEnum.hundred;
    }
    else if (args.index == 2) {
      this.gridShow = GridEnum.hundredone;
    }
  }

  sortSettings: Object = {
    columns: [
      { field: 'OrderDate', direction: 'Ascending' },
      { field: 'ProductID', direction: 'Ascending' }]
  };
  constructor(private dataCommunicationService: DataCommunicationService) { }
  ngOnInit(): void {
    console.log(dataSource.length)
    this.subscription.add(
      this.dataCommunicationService.grandparentData$.subscribe(data => {
        if (data) {
          console.log("Data from Grand Parent", data); // Add the received data to the dataSource array
          this.productStock = data;
        }
      })
    );
  }



  changeStock(stock: number) {

    if (stock == 10) {
      this.gridShow = GridEnum.ten;
    }
    else if (stock == 100) {
      this.gridShow = GridEnum.hundred;
    }
    else if (stock == 101) {
      this.gridShow = GridEnum.hundredone;
    }
  }

  onDataReceived(data: ProductOrder) {
    // Add the new data to the grid
    data.Stock = this.productStock;
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


export enum GridEnum {
  all, ten, hundred, hundredone
}

