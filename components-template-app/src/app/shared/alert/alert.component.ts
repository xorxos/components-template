import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-alert-component',
  templateUrl: 'alert.component.html',
  styleUrls: ['./styles/alert.scss']
})
export class AlertComponent {
  icon: undefined;
  iconColor: undefined;
  title: '';
  text: undefined;
  options: false;
  input: false;
  button: undefined;
  inputData: '';

  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.icon = data.icon;
    this.iconColor = data.iconColor;
    this.title = data.title;
    this.text = data.text;
    this.options = data.options;
    this.input = data.input;
    this.button = data.button;

    if (data.time) {
      setTimeout(() => {
        this.dialogRef.close();
      }, data.time);
    }
  }
}
