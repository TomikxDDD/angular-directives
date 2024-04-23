import { Component } from '@angular/core';
import { ConfirmationDirective } from '../../directives/07-confirmation.directive';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirmation-07',
  standalone: true,
  imports: [ConfirmationDirective, MatButtonModule],
  templateUrl: './confirmation-07.component.html',
  styleUrl: './confirmation-07.component.scss',
})
export class Confirmation07Component {
  protected confirm(): void {
    alert('Confirmed!');
  }
}
