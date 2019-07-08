import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./styles/login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginModalComponent {
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>) {}
}
