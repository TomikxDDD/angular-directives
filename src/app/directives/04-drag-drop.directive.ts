import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
  standalone: true,
})
export class DragDropDirective {
  dragging: boolean = false;
  startX: number = 0;
  startY: number = 0;

  get element() {
    return this.el.nativeElement;
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.element, 'position', 'absolute');
    this.renderer.setStyle(this.element, 'cursor', 'grab');
    this.renderer.setStyle(this.element, 'user-drag', 'none');
    this.renderer.setStyle(this.element, 'transition', '0.05s');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    this.renderer.setStyle(this.element, 'cursor', 'grabbing');
    this.dragging = true;
    const rect = this.element.getBoundingClientRect();
    this.startX = e.clientX - rect.left;
    this.startY = e.clientY - rect.top;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if (this.dragging) {
      this.dragging = false;
      this.renderer.setStyle(this.element, 'cursor', 'grab');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.dragging) {
      const offsetX = e.clientX - this.startX;
      const offsetY = e.clientY - this.startY;
      this.renderer.setStyle(this.element, 'left', `${offsetX}px`);
      this.renderer.setStyle(this.element, 'top', `${offsetY}px`);
    }
    e.preventDefault();
    e.stopPropagation();
  }
}
