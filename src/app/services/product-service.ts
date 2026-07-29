import { Service, signal } from '@angular/core';
import type { ProductListInterface } from '../models/product-list-interface';


@Service()
export class ProductService {
    productList = signal<ProductListInterface[]>(
        [
            {
                
            }
        ]
    )
}
