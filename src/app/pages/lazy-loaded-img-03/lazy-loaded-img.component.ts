import { Component } from '@angular/core';
import { LazyLoadedImgDirective } from '../../directives/03-lazy-loaded-img.directive';

@Component({
  selector: 'app-lazy-loaded-img',
  standalone: true,
  imports: [LazyLoadedImgDirective],
  templateUrl: './lazy-loaded-img.component.html',
  styleUrl: './lazy-loaded-img.component.scss',
})
export class LazyLoadedImgComponent {}
