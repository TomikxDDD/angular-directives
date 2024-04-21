import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
  standalone: true,
})
export class EllipsisDirective implements AfterViewInit {
  // Another way how to inject classes through DI without contructor(){} syntax
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    const container = this.el.nativeElement as HTMLElement;
    const content = container.innerHTML;

    if (container.scrollWidth > container.clientWidth) {
      this.renderer.setAttribute(container, 'title', content);
      this.renderer.setStyle(container, 'white-space', 'nowrap');
      this.renderer.setStyle(container, 'overflow', 'hidden');
      this.renderer.setStyle(container, 'text-overflow', 'ellipsis');
    }
  }
}
