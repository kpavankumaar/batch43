import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,AppComponent, ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent,AppComponent]
})
export class AppModule { 
  constructor(){
    console.log(" appmodule constructor ")
  }
}
