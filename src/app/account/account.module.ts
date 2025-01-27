import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ProductComponent } from './product/product.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomPipe } from './product/custom.pipe';
import { CustomCityDirective } from './product/custom-city.directive';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { CustomDialogComponent } from './product/custom-dialog/custom-dialog.component';
import { GrandparentDialogComponent } from './product/custom-dialog/grand-child-dialog/grand-child-dialog.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { ReactiveformComponent } from './login/reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProductComponent,
    CustomPipe,
    CustomCityDirective,
    CustomDialogComponent,
    GrandparentDialogComponent,
    LoginFormComponent,
    ReactiveformComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TextBoxModule,
    DropDownListModule,
    GridModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule {
    
}

