import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DragDropDirective } from '../../directives/04-drag-drop.directive';

@Component({
  selector: 'app-drag-drop-04',
  standalone: true,
  imports: [DragDropDirective],
  templateUrl: './drag-drop-04.component.html',
  styleUrl: './drag-drop-04.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragDrop04Component {}
