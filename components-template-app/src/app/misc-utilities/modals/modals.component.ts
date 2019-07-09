import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { LoginModalComponent } from './templates/login/login.component';
import { RegisterModalComponent } from './templates/register/register.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent {

  selectedOption: string;

  constructor(public dialog: MatDialog) {}

  registerModal(): void {
    const dialogRef = this.dialog.open(RegisterModalComponent);
  }

  loginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}
