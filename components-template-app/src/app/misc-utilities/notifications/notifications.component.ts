import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotificationComponent } from '../../shared';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  mySnackBarRef: any;

  constructor(public snackBar: MatSnackBar) {}

  showNotification(vpos, hpos, type, icon = ''): void {
    // for more info about Angular Material snackBar check: https://material.angular.io/components/snack-bar/overview
    this.mySnackBarRef = this.snackBar.openFromComponent(NotificationComponent, {
       data: {
         message: 'This is a nice notification positioned in the ' + vpos + ' ' + hpos,
         icon,
         type,
         dismissible: true
         // you can add everything you want here
       },
       duration: 2000,
       horizontalPosition: hpos, // 'start' | 'center' | 'end' | 'left' | 'right'
       verticalPosition: vpos, // 'top' | 'bottom'
       panelClass: ['notification-wrapper']
    });
    // this is to be able to close it from the NotificationComponent
    this.mySnackBarRef.instance.snackBarRef = this.mySnackBarRef;
  }

}
