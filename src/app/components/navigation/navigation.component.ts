import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLinkActive } from '@angular/router';
import { routesRaw } from '../../app.routes';

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
