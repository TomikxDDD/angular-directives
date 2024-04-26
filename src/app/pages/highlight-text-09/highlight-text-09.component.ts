import { Component } from '@angular/core';
import { HighlightTextDirective } from '../../directives/09-highlight-text.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-highlight-text-09',
  standalone: true,
  imports: [
    HighlightTextDirective,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './highlight-text-09.component.html',
  styleUrl: './highlight-text-09.component.scss',
})
export class HighlightText09Component {
  search: string = '';
}
