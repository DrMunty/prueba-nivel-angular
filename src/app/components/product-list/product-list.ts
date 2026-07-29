import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productList = inject(ProductService)
}
