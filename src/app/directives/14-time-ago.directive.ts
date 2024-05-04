import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTimeAgo]',
  standalone: true,
})
export class TimeAgoDirective {
  @Input()
  set appTimeAgo(date: Date) {
    this._appTimeAgo = date;
    this.renderTimeAgo();
  }
  get appTimeAgo(): Date {
    return this._appTimeAgo;
  }
  _appTimeAgo: Date = new Date();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  renderTimeAgo() {
    const now = new Date();
    const timeDifference: number = Math.floor(
      (now.getTime() - this.appTimeAgo.getTime()) / 1000,
    ); // [s]

    let msg = '';
    if (timeDifference < 0) {
      msg = 'in the future...';
    } else if (timeDifference < 60) {
      // less than minute
      msg = 'just now';
    } else if (timeDifference < 60 * 60) {
      // less than hour
      const minutes = Math.floor(timeDifference / 60);
      msg = `${minutes} minutes ago`;
    } else if (timeDifference < 60 * 60 * 24) {
      // less than hour
      const hours = Math.floor(timeDifference / (60 * 60));
      msg = `${hours} hours ago`;
    } else if (timeDifference < 60 * 60 * 24 * 7) {
      // less than week
      const days = Math.floor(timeDifference / (60 * 60 * 24));
      msg = `${days} days ago`;
    } else if (timeDifference < 60 * 60 * 24 * 7 * 52) {
      // less than year
      const weeks = Math.floor(timeDifference / (60 * 60 * 24 * 7));
      msg = `${weeks} weeks ago`;
    } else {
      const years = Math.floor(timeDifference / (60 * 60 * 24 * 7 * 52));
      msg = `${years} years ago`;
    }

    this.renderer.setProperty(this.el.nativeElement, 'innerText', msg);
  }
}
