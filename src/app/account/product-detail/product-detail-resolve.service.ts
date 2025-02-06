import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { dataSource, ProductOrder } from '../product/dataSource';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolveService implements Resolve<ProductOrder>{
  id!:string;
  constructor() { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<ProductOrder>|Promise<ProductOrder>|ProductOrder {
      this.id = route.paramMap.get('id')!;
      return dataSource.find((prod)=>prod.ProductID.toString()==this.id)!;
    }
    
    
}
