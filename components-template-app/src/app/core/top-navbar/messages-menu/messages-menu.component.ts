import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NotificationsMenuService } from '../notifications-menu/notifications-menu.service';

@Component({
  selector: 'app-messages-menu',
  styleUrls: ['./styles/messages-menu.scss'],
  templateUrl: './messages-menu.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MessagesMenuComponent {
  @Input() messages = [];

  constructor(private notificationsMenuService: NotificationsMenuService) {}

  closeNotificationsMenu(): void {
    this.notificationsMenuService.sidenav.close();
  }
}
