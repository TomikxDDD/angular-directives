import { Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ResponsiveDirective } from '../../directives/10-responsive.directive';

@Component({
  selector: 'app-responsive-10',
  standalone: true,
  imports: [ResponsiveDirective],
  templateUrl: './responsive-10.component.html',
  styleUrl: './responsive-10.component.scss',
})
export class Responsive10Component {
  Breakpoints = Breakpoints;
}
