import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
//Injectable可以把其他服务注入到这个服务的构造函数中里面
@Injectable()
export class ProductService {

  constructor(public logger:LoggerService) { }

  //声明一个getProduct方法，返回一个Product对象
  getProduct(): Product {
    this.logger.log("getProduct方法被调用");
    return new Product(0,"iPhone7",5899,"最新款苹果手机")
  }
}

//定义一个用来封装商品信息的类
export class Product {
  //通过构造函数来定义里面的字段
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc:string
  ) {

  }
}
