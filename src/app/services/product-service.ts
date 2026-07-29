import { Service, signal } from '@angular/core';
import type { ProductListInterface } from '../models/product-list-interface';


@Service()
export class ProductService {
    myProductList = signal<ProductListInterface[]>(
        [
            {
                id: '1',
                title: 'Coffe Maker',
                price: 250,
                description: 'An amazing coffe machine',
                image: 'https://picsum.photos/id/1/200/300',
                category: 'Kitchen product'
            },
            {
                id: '2',
                title: 'Television',
                price: 500,
                description: 'An amazing tv',
                image: 'https://picsum.photos/id/2/200/300',
                category: 'Living Room product'
            },
            {
                id: '3',
                title: 'Sofa',
                price: 1200,
                description: 'An amazing sofa',
                image: 'https://picsum.photos/id/3/200/300',
                category: 'Living Room product'
            },
            {
                id: '4',
                title: 'Cutting Board',
                price: 25,
                description: 'An amazing cutting board',
                image: 'https://picsum.photos/id/4/200/300',
                category: 'Kitchen product'
            },
            {
                id: '5',
                title: 'Lamp',
                price: 50,
                description: 'An amazing lamp',
                image: 'https://picsum.photos/id/5/200/300',
                category: 'Living Room product'
            },
            {
                id: '6',
                title: 'Coffe Table',
                price: 200,
                description: 'An amazing coffe table',
                image: 'https://picsum.photos/id/6/200/300',
                category: 'Living Room product'
            },
            {
                id: '7',
                title: 'Toaster',
                price: 75,
                description: 'An amazing toaster',
                image: 'https://picsum.photos/id/7/200/300',
                category: 'Kitchen product'
            },
            {
                id: '8',
                title: 'Cat scratcher',
                price: 20,
                description: 'An amazing cat scratcher',
                image: 'https://picsum.photos/id/8/200/300',
                category: 'Living Room product'
            },
            {
                id: '9',
                title: 'Cushion',
                price: 15,
                description: 'An amazing cushion',
                image: 'https://picsum.photos/id/9/200/300',
                category: 'Living Room product'
            },
            {
                id: '10',
                title: 'Oven',
                price: 450,
                description: 'An amazing oven',
                image: 'https://picsum.photos/id/10/200/300',
                category: 'Kitchen product'
            }

        ]
    )
}
