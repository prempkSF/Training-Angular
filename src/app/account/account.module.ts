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


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProductComponent,
    CustomPipe,
    CustomCityDirective
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    TextBoxModule,
    DropDownListModule,
    GridModule,
  ]
})
export class AccountModule {
    
}

