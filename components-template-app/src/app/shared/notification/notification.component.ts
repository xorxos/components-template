import { Component, Inject, Input, OnInit, Optional, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./styles/notification.scss'],
  encapsulation: ViewEncapsulation.None
})

export class NotificationComponent implements OnInit {
  @Input() message;
  @Input() text;
  @Input() icon;
  @Input() type = false;
  @Input() dismissible = false;

  baseClass = 'notification alert';
  classes = '';

  /** The instance of the component making up the content of the snack bar. */
  snackBarRef: MatSnackBarRef<NotificationComponent>;

  constructor(@Optional() @Inject(MAT_SNACK_BAR_DATA) public data: any) {
    if (data) {
      this.message = data.message;
      this.icon = data.icon;
      this.type = data.type;
      this.dismissible = data.dismissible;
    }
  }

  /** Dismisses the snack bar. */
  dismiss(): void {
    this.snackBarRef.dismiss();
  }

  ngOnInit(): void {
    this.classes = this.baseClass;
    this.classes += (this.dismissible ? ' alert-dismissible' :  '');
    this.classes += (this.type ? ' alert-' + this.type :  '');
  }

}
