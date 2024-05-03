import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableRightClick]',
  standalone: true,
})
export class DisableRightClickDirective {
  constructor() {}

  @HostListener('contextmenu', ['$event'])
  onRightClick(e: Event) {
    e.preventDefault();
  }
}
