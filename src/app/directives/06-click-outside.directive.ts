import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output()
  clickedOutsideEvent: EventEmitter<void> = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onOutsideClick(e: Event) {
    if (!this.el.nativeElement.contains(e.target)) {
      this.clickedOutsideEvent.emit();
    }
  }
}
