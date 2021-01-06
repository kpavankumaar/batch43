import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  hrefVal = "https://www.google.com";
  data = "value";
  color = "red";
  method(){
    this.color = "grey";
  }
  update(val : string){
    console.log(val);
    this.data = val;
  }
  ngOnInit(): void {
  }
  constructor() { 
    console.log( " Product details component Constructor")
  }

}
