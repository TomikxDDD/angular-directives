import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app03LazyLoadedImg]',
  standalone: true,
})
export class LazyLoadedImgDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    const isVisible = this.isWithinViewport();
    if (isVisible) {
      this.renderImg();
    }
  }

  private isWithinViewport(): boolean {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    return (
      rect.top > 0 &&
      rect.left > 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  private renderImg(): void {
    const url = this.elementRef.nativeElement.getAttribute('data-src');
    if (url) {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'src', url);
    }
  }
}
