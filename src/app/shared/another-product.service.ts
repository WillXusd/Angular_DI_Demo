import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';

@Injectable({
  providedIn: 'root'
})
  //实现ProductService，这意味着他会和ProductService有相同的方法
export class AnotherProductService implements ProductService {
  getProduct(): Product {
    return new Product(1, "iPhone8s", 12299, "最新款苹果手机")
  
    }

  constructor() { }
}
