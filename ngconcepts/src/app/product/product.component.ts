import { Component } from "@angular/core";


@Component({
    selector:'app-product',
    template:`<h3> product component </h3>
                <ul>
                    <li *ngIf = "data"> test </li>
                    <li *ngIf = "!data"> negation </li>
                </ul>            
    `,
    styles: [`h3{ 'color' : 'grey'}`]
})
export class ProductComponent{
    constructor(){
        console.log(" ProductComponent constructor ");
    }
    data = "true";
}