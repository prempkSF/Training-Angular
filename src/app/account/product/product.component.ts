import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { dataSource, ProductOrder } from './dataSource';
import { FilterService, Grid, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { Subscription } from 'rxjs';
import { DataCommunicationService } from '../data-communicate.service';
import { ClickEventArgs, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { Router } from '@angular/router';


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
  @ViewChild('dialogContainer') public dialog!:DialogComponent;
  productStock!: number;
  @ViewChild('grid') grid!: Grid;
  dataSource: ProductOrder[] = dataSource;
  dataSourceInfant: ProductOrder[] = dataSource.filter((product) => { return product.Category == "Kid" });
  dataSourceToddler: ProductOrder[] = dataSource.filter((product) => { return product.Category =="Toddler" });
  dataSourceKid: ProductOrder[] = dataSource.filter((product) => { return product.Category =="Kid" });
  public listFields: { [key: string]: Object } = { id: "id", text: "text",isVisible:"isVisible" };
  gridShow: number = 0;

  filterSettings: Object = { type: 'Excel' };
  public ListData: { [key: string]: Object }[] = [
    {
      id: "1", text: "Infant"
    },
    {
      id: "2", text: "Toddler"
    },
    {
      id: "3", text: "Kid"
    },
  ];
  subscription: Subscription = new Subscription();
  toolbarCliked(args: ClickEventArgs) {
    if (args.item.tooltipText == "Menu") {
      this.sidebarInstance.toggle();
    }
  }

  @HostListener('mouseenter')
  handleMouseHover(event: KeyboardEvent) {
    localStorage.setItem('isValue',"true");
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

  constructor(private router:Router,private dataCommunicationService: DataCommunicationService) { }
  ngOnInit(): void {
    // this.ngOnInit()
    this.subscription.add(
      this.dataCommunicationService.grandparentData$.subscribe(data => {
        if (data) {
          this.productStock=data;
          console.log("Data from Grand Parent", data);
        }
      }
    )
  );
  }
 
getProduct(productID:number)
{
  const product=dataSource.find((prod)=>prod.ProductID==productID);
  console.log(product)
  this.router.navigate(['account/product/',productID],{state:{data:product}});
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
    console.log("Destory")
  }
}


export enum GridEnum {
  all, ten, hundred, hundredone
}

