import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {

  constructor(private el: ElementRef) {
    console.log('this is within myColor directive');
   }

   @HostBinding('class.my-color')
   myColorClass: boolean = true;
   
   @Input('myColor')
   colorValue: string;

   @Input()
   abc: string;

   ngOnInit(){
    console.log(this.el);    
    this.el.nativeElement.style.color = this.colorValue || "blue";
    this.el.nativeElement.style.backgroundColor = this.abc;
   }

   @HostListener('mouseenter')
   onMouseEnter() {
    this.el.nativeElement.style.color = "red";
    this.myColorClass = false;
   }

   @HostListener('mouseleave')
   onMouseLave() {
    this.el.nativeElement.style.color = this.colorValue || "blue";
    this.myColorClass = true;
   }


}
