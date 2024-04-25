import { Component, WritableSignal, signal } from '@angular/core';
import { InfiniteScrollDirective } from '../../directives/08-infinite-scroll.directive';
import { NewspaperService } from '../../services/newspaper.service';

@Component({
  selector: 'app-infinite-scroll-08',
  standalone: true,
  imports: [InfiniteScrollDirective],
  templateUrl: './infinite-scroll-08.component.html',
  styleUrl: './infinite-scroll-08.component.scss',
})
export class InfiniteScroll08Component {
  INITIAL_TITLES_AMOUNT: number = 10;

  titles: WritableSignal<string[]> = signal(['']);

  constructor(private newspaperService: NewspaperService) {
    this.titles.set(
      this.newspaperService.getRandomTitles(this.INITIAL_TITLES_AMOUNT),
    );
  }

  getRecords(amount: number) {
    this.titles.set([
      ...this.titles(),
      ...this.newspaperService.getRandomTitles(amount),
    ]);
  }
}
