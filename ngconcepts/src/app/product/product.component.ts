import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'app-product',
    template:`<h3 > product component </h3>
                <ul>
                    <li *ngIf = "data"> test </li>
                    <li *ngIf = "!data"> negation </li>
                </ul> 
                <h3>{{parentColor}}</h3>
                <button (click) = "sendDataToParentComp($event)"> click me </button>
    `,
    styles: [`h3{ 'color' : 'grey'}`]
})
export class ProductComponent{
    constructor(){
        console.log(" ProductComponent constructor ");
    }
    data = "true";
    @Input() parentColor: string;
    @Output() shareData:EventEmitter<any>  = new EventEmitter();
    sendDataToParentComp(e){

        this.shareData.emit(e)
    }

}