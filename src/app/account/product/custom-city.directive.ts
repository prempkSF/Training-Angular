import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomCity]'
})
export class CustomCityDirective implements AfterViewInit{
  @Input('shipCity') public shipCity!:string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {

    if(this.shipCity=="Toddler")
    {
      this.renderer.setStyle(this.el.nativeElement, 'color', "green");
    }
    else
    {
      this.renderer.setStyle(this.el.nativeElement, 'color', "blue");
    }
    
    
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('lightblue');
  }
  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
