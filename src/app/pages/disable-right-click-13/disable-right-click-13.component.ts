import { Component } from '@angular/core';
import { DisableRightClickDirective } from '../../directives/13-disable-right-click.directive';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-disable-right-click-13',
  standalone: true,
  imports: [DisableRightClickDirective, MatButtonModule],
  templateUrl: './disable-right-click-13.component.html',
  styleUrl: './disable-right-click-13.component.scss',
})
export class DisableRightClick13Component {}
