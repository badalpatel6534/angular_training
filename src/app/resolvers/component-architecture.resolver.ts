import { ResolveFn } from '@angular/router';
import { DataService } from '../services/data.service';
import { inject } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Product } from '../interfaces/product-interface';


export const componentArchitectureResolver: ResolveFn<Observable<Array<Product> | string>> = (route, state) => {
  console.log('Called Get Product in resolver...', route);
  const dataService = inject(DataService);
  return dataService.getProducts().pipe(
    catchError((error) => {
      return of('No data');
    })
  );
};

export const componentArchitectureWithIdResolver: ResolveFn<Observable<Array<Product> | string>> = (route, state) => {
  console.log('Called Get Product in resolver...', route);
  const productId = route.params['id'];
  console.log("productId::::::::::", productId);
  const dataService = inject(DataService);
  return dataService.getProductsById(productId).pipe(
    catchError((error) => {
      return of('No data');
    })
  );
};
