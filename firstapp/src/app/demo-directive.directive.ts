import { Directive, ElementRef,AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective implements AfterViewInit{
  
    constructor(private el: ElementRef) { }
  
    ngAfterViewInit() {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    change(changedcolor:string){
      this.el.nativeElement.style.backgroundColor = changedcolor;
    }
  
}
