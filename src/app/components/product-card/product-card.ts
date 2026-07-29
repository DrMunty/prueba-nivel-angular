import { Component, input, ChangeDetectionStrategy, inject } from '@angular/core';
import type { ProductListInterface } from '../../models/product-list-interface';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCard {
productList = inject(ProductService)
}
