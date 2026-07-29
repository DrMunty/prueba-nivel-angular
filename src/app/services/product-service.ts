import { Service, signal } from '@angular/core';
import type { ProductListInterface } from '../models/product-list-interface';


@Service()
export class ProductService {
    productList = signal<ProductListInterface[]>(
        [
            {
                id: '1',
                title: 'Coffe Maker',
                price: string,
                description: string,
                image: string,
                category: string
            }
        ]
    )
}
