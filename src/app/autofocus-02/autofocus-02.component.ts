import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AutofocusDirective } from '../directives/02-autofocus.directive';

@Component({
  selector: 'app-autofocus-02',
  standalone: true,
  imports: [AutofocusDirective, MatFormField, MatInputModule],
  templateUrl: './autofocus-02.component.html',
  styleUrl: './autofocus-02.component.scss',
})
export class Autofocus02Component {}
