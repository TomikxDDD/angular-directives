import { Component } from '@angular/core';
import { routesRaw } from '../app.routes';
import { MatListModule } from '@angular/material/list';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  routesRaw = routesRaw;
}
