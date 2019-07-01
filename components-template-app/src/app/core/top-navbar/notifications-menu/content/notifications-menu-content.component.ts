import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notifications-menu-content',
  styleUrls: [
    './styles/notifications-menu-content.scss'
  ],
  templateUrl: './notifications-menu-content.component.html',
  encapsulation: ViewEncapsulation.None
})

export class NotificationsMenuContentComponent {
  @Input() notifications = [];
}
