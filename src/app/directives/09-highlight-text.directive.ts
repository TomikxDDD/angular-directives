import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
  standalone: true,
})
export class HighlightTextDirective {
  @Input()
  set searchQuery(value: string) {
    this._searchQuery = value;
    this.markSearchResult(value);
  }
  get searchQuery(): string {
    return this._searchQuery;
  }
  _searchQuery: string = '';

  get element() {
    return this.el.nativeElement;
  }

  constructor(private el: ElementRef) {}

  private markSearchResult(value: string) {
    if (value.length > 0) {
      const text = this.element.innerText as string;
      const regex = new RegExp(this.escapeRegex(value), 'gi');
      const updatedText = text.replaceAll(regex, `<mark>${value}</mark>`);
      this.element.innerHTML = updatedText;
    } else {
      this.element.innerHTML = this.element.innerText;
    }
  }

  private escapeRegex(str: string) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
}
