import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { AuthGuardService } from './authguard.service';
import { DeactivateService } from '../deactivate.service';
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch : "full"
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "product",
    component : ProductComponent,
    canActivate : [AuthGuardService],
    canDeactivate : [DeactivateService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
