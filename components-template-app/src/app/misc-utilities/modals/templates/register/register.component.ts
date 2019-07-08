import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./styles/register.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterModalComponent {
  constructor(public dialogRef: MatDialogRef<RegisterModalComponent>) {}
}
