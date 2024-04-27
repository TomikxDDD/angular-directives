import { BreakpointObserver } from '@angular/cdk/layout';
import {
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Directive({
  selector: '[appResponsive]',
  standalone: true,
})
export class ResponsiveDirective implements OnInit {
  @Input({ required: true })
  appResponsive: string[] = [];

  private readonly destroyRef = inject(DestroyRef);
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly bpObserver = inject(BreakpointObserver);

  get element() {
    return this.el.nativeElement;
  }

  ngOnInit(): void {
    this.bpObserver
      .observe(this.appResponsive)
      .pipe(
        map((result) => result.matches),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (result) => {
          if (result) this.renderer.setStyle(this.element, 'display', 'block');
          else this.renderer.setStyle(this.element, 'display', 'none');
        },
      });
  }
}
