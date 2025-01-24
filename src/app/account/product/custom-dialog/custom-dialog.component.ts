import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ProductOrder } from '../dataSource';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {
  @Output() dataSent = new EventEmitter<any>();
  formData!: ProductOrder;
  @ViewChild("ejDialog") ejDialog!: DialogComponent;

  @ViewChild('productName') productName!: ElementRef;
  @ViewChild('imgUrl') imgUrl!: ElementRef;
  @ViewChild('productID') productID!: ElementRef;
  @ViewChild('customerID') CustomerID!: ElementRef;
  @ViewChild('orderDate') OrderDate!: ElementRef;
  @ViewChild('shipAddress') shipAddress!: ElementRef;
  @ViewChild('shipcountry') Shipcountry!: ElementRef;

  public onOpenDialog = (event: any): void => {
    // Call the show method to open the Dialog
    this.ejDialog.show();
  };
  public onCloseDialog = (event: any): void => {
    // Call the show method to open the Dialog
    this.ejDialog.hide();
  };
  // Image: string;
  // ProductName: string;
  // ProductID: number;
  // CustomerID: string;
  // OrderDate: Date;
  // ShipAddress: string;
  // ShipCountry: string;



  onSubmit() {
    this.formData = new ProductOrder(
      this.imgUrl.nativeElement.value,
      this.productName.nativeElement.value,
      this.productID.nativeElement.value,

      this.CustomerID.nativeElement.value,
      this.OrderDate.nativeElement.value,
      this.Shipcountry.nativeElement.value,
      this.shipAddress.nativeElement.value
    );
    console.log(this.formData.ProductName)
    this.dataSent.emit(this.formData);
    this.ejDialog.hide();
  }
}
