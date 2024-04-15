import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidationDirective } from '../directives/01-password-validation.directive';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pw-validation-01',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PasswordValidationDirective,
    MatFormField,
    MatInputModule,
    NgIf,
  ],
  templateUrl: './pw-validation-01.component.html',
  styleUrl: './pw-validation-01.component.scss',
})
export class PwValidation01Component {
  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
