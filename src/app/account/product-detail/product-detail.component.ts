import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductOrder } from '../product/dataSource';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product!: ProductOrder;

  constructor(private _Activatedroute: ActivatedRoute, private router: Router, private location: Location) {
    this.product = this.router.getCurrentNavigation()!.extras.state!['data'] as ProductOrder;
  }

  id!: string | null;

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
  }
}
