import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSrpHighlight]',
  standalone: true
})
export class SrpHighlightDirective {
  @Input() set appSrpHighlight(condition: boolean) {
    if (condition) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#17a2b8'); // ✅ Change background to green
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');

    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}