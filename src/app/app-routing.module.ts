import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    redirectTo: "account",
    pathMatch : "full"
  },
  {
    path : "account",
    loadChildren : ()=> import('./account/account.module').then((module)=>module.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterOutlet, RouterLink, RouterLinkActive],
  exports: [RouterModule]
})
export class AppRoutingModule { }
