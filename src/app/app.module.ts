import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherProductService } from './shared/another-product.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  //把service声明到providers里面
  //当提供器声明到providers时，他是对所有组件可见的，所有组件都可以注入他 
  //providers: [{
  //  provide: ProductService,
  //  //通过参数状态判断读取哪一个service
  //  useFactory: (logger:LoggerService,isDev) => {
  //    if (isDev) {
  //      return new ProductService(logger);
  //    } else {
  //      return new AnotherProductService(logger);
  //    }
  //  },
  //  deps: [LoggerService, "IS_DEV_ENV"]
  //}, LoggerService, {
  //    provide:"IS_DEV_ENV",useValue:false
  //  }],


  //对象
  providers: [{
    provide: ProductService,
    //通过参数状态判断读取哪一个service
    useFactory: (logger: LoggerService, appConfig) => {
      if (appConfig.isDev) {
        return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, "APP_CONFIG"]
  }, LoggerService, {
      provide: "APP_CONFIG", useValue: {isDev:false}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
