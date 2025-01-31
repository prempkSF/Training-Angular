import { Component, ViewChild, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ProductOrder } from '../dataSource';
import { GrandparentDialogComponent } from './grand-child-dialog/grand-child-dialog.component';  // Import the Grandparent Dialog component
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnDestroy {


  @ViewChild("parentDialog") parentDialog!: DialogComponent;
  @ViewChild('grandparentDialog') grandparentDialogComponent!: GrandparentDialogComponent;

  @Output() dataSent = new EventEmitter<ProductOrder>();
  formData!: ProductOrder;

  dropDown : string[] =[`Infant`,`Toddlers`,`Kids`];
  dropDownValue:string='';

  @ViewChild('productName') productName!: ElementRef;
  @ViewChild('imgUrl') imgUrl!: ElementRef;
  @ViewChild('productID') productID!: ElementRef;
  @ViewChild('customerID') CustomerID!: ElementRef;
  @ViewChild('orderDate') OrderDate!: ElementRef;
  @ViewChild('shipAddress') shipAddress!: ElementRef;
  @ViewChild('shipcountry') Shipcountry!: ElementRef;
  @ViewChild('shipcountry') category!: DropDownList;

  // Open the Parent Dialog
  public onOpenDialog = (event: any): void => {
    this.parentDialog.show();
  };

  // Close the Parent Dialog
  public onCloseDialog = (event: any): void => {
    this.parentDialog.hide();
  };

  // Open the Grandparent Dialog from the Parent Dialog
  openGrandparentDialog() {
    this.grandparentDialogComponent.onOpenDialog();
  }

  // Handle form submission in the Parent Dialog (Custom Dialog)
  onSubmit() {
    console.log(this.dropDownValue)
    this.formData = new ProductOrder(
      this.imgUrl.nativeElement.value,
      this.productName.nativeElement.value,
      this.productID.nativeElement.value,
      this.CustomerID.nativeElement.value,
      this.OrderDate.nativeElement.value,
      this.Shipcountry.nativeElement.value,
      this.shipAddress.nativeElement.value,
      0,
      this.dropDownValue
    );

    // Emit data to the parent component
    this.dataSent.emit(this.formData);

    // Close the current dialog (Parent Dialog)
    this.parentDialog.hide();
  }

  // Handle data from Grandparent Dialog (if needed)
  onGrandparentDataReceived(data: string) {
    console.log("Grandparent Data: ", data);
    // You can handle the data received from the Grandparent Dialog here
  }

  ngOnDestroy()
  {
    
    this.dataSent.complete();
    console.log("Event Closed",this.dataSent.closed);
  }
}
