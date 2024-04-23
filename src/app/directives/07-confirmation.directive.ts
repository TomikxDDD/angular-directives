import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { filter } from 'rxjs';

@Directive({
  selector: '[appConfirmation]',
  standalone: true,
})
export class ConfirmationDirective {
  @Input() message: string = '';

  @Output() confirm: EventEmitter<void> = new EventEmitter();

  constructor(private readonly dialog: MatDialog) {}

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    e.preventDefault();
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: this.message },
    });

    dialogRef
      .afterClosed()
      .pipe(filter((result) => !!result))
      .subscribe({
        next: (_result) => this.confirm.emit(),
      });
  }
}
