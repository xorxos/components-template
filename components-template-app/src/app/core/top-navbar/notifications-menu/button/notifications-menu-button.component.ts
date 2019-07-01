import { Component, Input } from '@angular/core';
import { NotificationsMenuService } from '../notifications-menu.service';

@Component({
  selector: 'app-notifications-menu-button',
  styleUrls: ['../../content/styles/menus-buttons.scss'],
  templateUrl: './notifications-menu-button.component.html'
})
export class NotificationsMenuButtonComponent {
  @Input() notifications = [];

  constructor(private notificationsMenuService: NotificationsMenuService) {}

  toggleNotificationsMenu(): void {
    this.notificationsMenuService.sidenav.toggle();
  }
}
