import { Routes } from '@angular/router';
import { ProductCard } from './components/product-card/product-card';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';

export const routes: Routes = [
    {path: '', component:ProductList},
    {path: 'card', component: ProductCard},
    {path: 'details/:productId', component: ProductDetail},
    {path: '**', redirectTo: ''}
];
