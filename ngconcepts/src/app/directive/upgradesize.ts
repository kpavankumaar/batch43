import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[increaseSize]'
})

export class UpgradeSize{
    constructor(private el: ElementRef){
        // console.log(el.nativeElement);

        el.nativeElement.style.fontSize = "50px";
    }
    @HostListener("click") 
    onClick(){
        this.el.nativeElement.style.backgroundColor = "grey";
        console.log("onclick" , this.dataTest);

    }
    @Input() dataTest:string | undefined;

}