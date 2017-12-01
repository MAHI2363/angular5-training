import { Directive, Input, OnInit, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeightAdjuster]'
})
export class HeightAdjusterDirective implements OnInit {
  defaultHeight = 100;

  @Input()
  appHeightAdjuster: number;

  @HostBinding('class.height-adjuster')
  enableScroll = true;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const heightVal = this.appHeightAdjuster || this.defaultHeight;
    this.el.nativeElement.style.maxHeight = `${heightVal}px`;
  }

}
