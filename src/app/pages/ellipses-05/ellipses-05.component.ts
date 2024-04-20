import { Component } from '@angular/core';
import { EllipsisDirective } from '../../directives/05-ellipsis.directive';

@Component({
  selector: 'app-ellipses-05',
  standalone: true,
  imports: [EllipsisDirective],
  templateUrl: './ellipses-05.component.html',
  styleUrl: './ellipses-05.component.scss',
})
export class Ellipses05Component {}
