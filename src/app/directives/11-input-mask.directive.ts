import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputMask]',
  standalone: true,
})
export class InputMaskDirective {
  @Input()
  appInputMask: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(e: InputEvent) {
    const input = e.target as HTMLInputElement;
    const originalValue = input.value.replace(/\D/g, ''); // Removes any non-digit character
    const originalValueLength = originalValue.length;

    const inputMaskLength = this.appInputMask.length;

    let valueIndex = 0;
    let maskedValue = '';
    for (let maskIndex = 0; maskIndex < inputMaskLength; maskIndex++) {
      // mask character is a digit
      if (/\d/.test(this.appInputMask[maskIndex])) {
        if (valueIndex < originalValueLength) {
          maskedValue += originalValue[valueIndex];
          valueIndex++;
        } else {
          break;
        }
      } else {
        maskedValue += this.appInputMask[maskIndex];
      }
    }

    input.value = maskedValue;
  }
}
