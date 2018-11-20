import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  //在组件里面声明一个product属性来接收服务中获取到的数据
  product: Product;

  //在构造函数里，通过依赖注入声明我需要一个tooken类型是ProductService
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
