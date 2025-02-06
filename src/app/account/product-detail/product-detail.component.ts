import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductOrder } from '../product/dataSource';
import { ProductDetailResolveService } from './product-detail-resolve.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product!: ProductOrder;

  constructor(private _activatedroute: ActivatedRoute, private location: Location) {
    // this.product = this.router.getCurrentNavigation()!.extras.state!['data'] as ProductOrder;
  }
  goBack(): void {
    this.location.back();
  }
  id!: string | null;

  ngOnInit() {
    this._activatedroute.data.subscribe((data)=>{
      this.product = data['ProductOrder'];
    });
    
  }
}
