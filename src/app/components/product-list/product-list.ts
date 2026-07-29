import { Component, inject, ChangeDetectionStrategy} from '@angular/core';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductList {
  productList = inject(ProductService)
}
