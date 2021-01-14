import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule } from '@angular/forms';
import { UpgradeSize } from './directive/upgradesize';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [ {
  path:'orders' , component: OrdersComponent
}]
@NgModule({
  declarations: [
    ProductComponent,AppComponent, ProductdetailsComponent, UpgradeSize, OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ProductComponent,AppComponent]
})
export class AppModule { 
  constructor(){
    console.log(" appmodule constructor ")
  }
}
