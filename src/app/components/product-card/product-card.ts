import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import type { ProductListInterface } from '../../models/product-list-interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCard {
  productData = input.required<ProductListInterface[]>();
}
