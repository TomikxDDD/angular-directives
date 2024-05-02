import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective implements AfterViewInit {
  @Input()
  tooltipText: string = '';

  tooltipElement: HTMLDivElement = this.renderer.createElement('div');

  get element() {
    return this.el.nativeElement as HTMLElement;
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.createTooltip();
  }

  private createTooltip() {
    this.renderer.appendChild(this.element, this.tooltipElement);
    this.renderer.setStyle(this.element, 'position', 'relative');
    this.renderer.setStyle(this.tooltipElement, 'display', 'none');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltipElement.innerText = this.tooltipText;
    const rect = this.element.getBoundingClientRect();
    const offsetX =
      rect.left + rect.width / 2 - this.tooltipElement.clientWidth / 2;
    const offsetY = this.element.clientHeight + 10;
    this.renderer.setStyle(this.tooltipElement, 'display', 'block');
    this.renderer.setStyle(this.tooltipElement, 'left', `${offsetX}px`);
    this.renderer.setStyle(this.tooltipElement, 'top', `${offsetY}px`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.tooltipElement, 'display', 'none');
  }
}
