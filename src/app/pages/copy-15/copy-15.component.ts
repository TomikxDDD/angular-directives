import { Component, WritableSignal, signal } from '@angular/core';
import { CopyDirective } from '../../directives/15-copy.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-copy-15',
  standalone: true,
  imports: [
    CopyDirective,
    MatButton,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './copy-15.component.html',
  styleUrl: './copy-15.component.scss',
})
export class Copy15Component {
  copied: WritableSignal<boolean> = signal(false);
}
