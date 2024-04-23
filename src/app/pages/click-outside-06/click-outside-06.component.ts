import { Component, ElementRef, Renderer2, inject } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/06-click-outside.directive';

@Component({
  selector: 'app-click-outside-06',
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: './click-outside-06.component.html',
  styleUrl: './click-outside-06.component.scss',
})
export class ClickOutside06Component {
  private readonly renderer = inject(Renderer2);

  protected close(box: HTMLElement) {
    this.renderer.setStyle(box, 'background-color', 'red');
  }
}
