import { Component, ChangeDetectionStrategy, input, computed, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetail {
  router = inject(Router)
  productId = input.required<string>();
  productService = inject(ProductService)
  product = computed(()=> {
    return this.productService.myProductList().find(p => p.id === this.productId());
  })

  returnToProductList(){
    this.router.navigate(['']);
  }
}
