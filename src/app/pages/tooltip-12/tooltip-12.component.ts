import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TooltipDirective } from '../../directives/12-tooltip.directive';

@Component({
  selector: 'app-tooltip-12',
  standalone: true,
  imports: [MatButtonModule, TooltipDirective],
  templateUrl: './tooltip-12.component.html',
  styleUrl: './tooltip-12.component.scss',
})
export class Tooltip12Component {}
