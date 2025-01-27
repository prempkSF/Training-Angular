import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { DataCommunicationService } from '../../../data-communicate.service';

@Component({
  selector: 'app-grandparent-dialog',
  templateUrl: './grand-child-dialog.component.html',
  styleUrls: ['./grand-child-dialog.component.scss']
})
export class GrandparentDialogComponent {

  constructor(private dataCommunicationService: DataCommunicationService) {}
  @ViewChild('grandparentDialog') grandparentDialog!: DialogComponent;
  @Output() dataSent = new EventEmitter<string>();

  additionalData: string = '';

  // Open the Grandparent Dialog
  public onOpenDialog(): void {
    this.grandparentDialog.show();
  }

  // Close the Grandparent Dialog
  public onCloseDialog(): void {
    this.grandparentDialog.hide();
  }

  // Submit data from the Grandparent Dialog
  public onSubmit(): void {
    this.dataCommunicationService.sendGrandparentData(this.additionalData);
    this.onCloseDialog();
  }
}
