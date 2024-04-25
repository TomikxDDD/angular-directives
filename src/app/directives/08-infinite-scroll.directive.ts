import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true,
})
export class InfiniteScrollDirective {
  @Input()
  scrollThreshold: number = 100;

  @Output()
  scrolledDown: EventEmitter<void> = new EventEmitter();

  get element() {
    return this.el.nativeElement;
  }

  constructor(private el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(e: Event) {
    const target = e.target as HTMLElement;
    if (
      target.scrollHeight - target.scrollTop <=
      this.element.clientHeight + this.scrollThreshold
    ) {
      this.scrolledDown.emit();
    }
  }
}
