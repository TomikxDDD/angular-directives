import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCopy]',
  standalone: true,
})
export class CopyDirective {
  @Input()
  copyText: string = '';

  @Output()
  copied: EventEmitter<void> = new EventEmitter();

  @HostListener('click')
  onClick() {
    window.navigator.clipboard
      .writeText(this.copyText)
      .then((_) => this.copied.emit());
  }
}
