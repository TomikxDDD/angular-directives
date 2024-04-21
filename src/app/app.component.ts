import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationEnd, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  pageTitle: WritableSignal<string> = signal('');

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((e) => e instanceof ActivationEnd),
        map((e) => {
          if (e instanceof ActivationEnd) {
            return e.snapshot?.data['title'];
          }
          return null;
        }),
      )
      .subscribe({
        next: (result) => {
          this.pageTitle.set(result);
        },
      });
  }
}
