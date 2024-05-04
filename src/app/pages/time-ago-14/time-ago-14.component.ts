import { Component } from '@angular/core';
import { TimeAgoDirective } from '../../directives/14-time-ago.directive';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-ago-14',
  standalone: true,
  imports: [
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    TimeAgoDirective,
  ],
  templateUrl: './time-ago-14.component.html',
  styleUrl: './time-ago-14.component.scss',
})
export class TimeAgo14Component {
  date: Date = new Date(2024, 3, 30);
}
