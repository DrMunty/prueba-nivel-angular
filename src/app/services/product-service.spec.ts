import { TestBed } from '@angular/core/testing';

import { ProductService } from './product-service';
import { ProductListInterface } from '../models/product-list-interface';
import { ProductList } from '../components/product-list/product-list';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);

    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should display all 10 products', () => {
    expect(service.myProductList.length).toBe(10);
  });

});
