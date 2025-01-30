import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ProductComponent } from './account/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateService implements CanDeactivate<ProductComponent> {

  canDeactivate(
    component: ProductComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    if(localStorage.getItem('isValue')==='true')
    {
      alert("Do you want to exit ? ");
      return true;
    }
    else
    {
      alert("Close");
      return false;
    }
  }
}
