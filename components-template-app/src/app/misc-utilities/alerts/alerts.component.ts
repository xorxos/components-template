import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertComponent } from '../../shared';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  constructor(public dialog: MatDialog) {}

  // You can pass the following options to the alert component:
  // {
  //   icon: 'check', // FontAwesome icon name
  //   iconColor: 'success' | 'failure', // icon color
  //   title: "Here's a message!", // Title of the modal
  //   text: 'The content, // Text of the modal
  //   options: false, // True will display yes or no buttons
  //   input: false, // True will show a text input
  //   button: 'Good', // Texto of the modal button
  //   time: undefined // Time you want the modal to live (ms)
  // }

  basicAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Thanks for sharing!',
        button: 'DOWNLOAD'
      }
    });
  }

  textAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Meet up with Alba',
        text: 'Today, 5:30 PM',
        button: 'YASSS!'
      }
    });
  }

  iconAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        icon: 'check-circle',
        iconColor: 'success',
        title: 'Good job!',
        text: 'You are the winner',
        button: 'PLAY AGAIN'
      }
    });
  }

  optionsAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        icon: 'exclamation-circle',
        iconColor: 'success',
        title: 'Do you want to submit your exam?',
        text: 'Think it twice',
        options: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(AlertComponent, {
          data: {
            icon: 'check-circle',
            iconColor: 'success',
            title: 'Congrats!',
            text: 'Your exam has been submitted successfully.',
            button: 'OK'
          }
        });
      }
    });
  }

  cancelledAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        icon: 'exclamation-circle',
        iconColor: 'failure',
        title: 'Do you want to delete your file?',
        text: 'You will not be able to recover it',
        options: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialog.open(AlertComponent, {
          data: {
            icon: 'check-circle',
            iconColor: 'success',
            title: 'Deleted',
            text: 'Your file has been deleted.',
            button: 'OK'
          }
        });
      } else {
        this.dialog.open(AlertComponent, {
          data: {
            icon: 'times-circle',
            iconColor: 'failure',
            title: 'Canceled',
            text: 'Your file is safe. You can find it on your inbox.',
            button: 'OK'
          }
        });
      }
    });
  }

  inputAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Please enter your name',
        input: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialog.open(AlertComponent, {
        data: {
          title: 'Your name is',
          text: result,
          button: 'OK'
        }
      });
    });
  }

  timedAlert(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Auto close alert!',
        text: 'I will close in 2 seconds. Bye bye!',
        time: 2000
      }
    });
  }

}
