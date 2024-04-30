import { Component } from '@angular/core';
import { InputMaskDirective } from '../../directives/11-input-mask.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input-mask-11',
  standalone: true,
  imports: [
    InputMaskDirective,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './input-mask-11.component.html',
  styleUrl: './input-mask-11.component.scss',
})
export class InputMask11Component {
  mask: string = '+420 123 456 789';
}
