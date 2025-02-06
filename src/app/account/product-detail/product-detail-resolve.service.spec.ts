import { TestBed } from '@angular/core/testing';

import { ProductDetailResolveService } from './product-detail-resolve.service';

describe('ProductDetailResolveService', () => {
  let service: ProductDetailResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
