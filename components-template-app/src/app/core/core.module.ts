import { NgModule } from '@angular/core';

// Top navbar stuff
import { MessagesMenuComponent } from './top-navbar/messages-menu/messages-menu.component';
import { MessagesMenuService } from './top-navbar/messages-menu/messages-menu.service';
import { NotificationsMenuButtonComponent } from './top-navbar/notifications-menu/button/notifications-menu-button.component';
import { NotificationsMenuContentComponent } from './top-navbar/notifications-menu/content/notifications-menu-content.component';
import { NotificationsMenuService } from './top-navbar/notifications-menu/notifications-menu.service';
import { SearchBarComponent } from './top-navbar/search-bar/search-bar.component';
import { TopNavbarContentComponent } from './top-navbar/content/top-navbar-content.component';

// Side menu stuff
import { CondenseMenuComponent } from './side-menu/condense/condense.component';
import { MenuTopItemsComponent } from './side-menu/top-items/top-items.component';
import { SideMenuContentComponent } from './side-menu/content/side-menu-content.component';
import { SideMenuService } from './side-menu/side-menu.service';

// 404 page stuff
import { Error404PageComponent } from './404/error-404-page.component';
import { Error404PageResolver } from './404/error-404-page.resolver';

import { ResponsiveBreakpointsComponent } from './responsive-breakpoints/responsive-breakpoints.component';
import { ResponsiveBreakpointDirective } from './responsive-breakpoints/responsive-breakpoint.directive';
import { ResponsiveBreakpointsService } from './responsive-breakpoints/responsive-breakpoints.service';

// Required modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // Top navbar stuff
    MessagesMenuComponent,
    NotificationsMenuButtonComponent,
    NotificationsMenuContentComponent,
    SearchBarComponent,
    TopNavbarContentComponent,
    // Side menu stuff
    CondenseMenuComponent,
    MenuTopItemsComponent,
    SideMenuContentComponent,
    // 404
    Error404PageComponent,
    // Responsive stuff
    ResponsiveBreakpointDirective,
    ResponsiveBreakpointsComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    MessagesMenuService,
    NotificationsMenuService,
    SideMenuService,
    // 404
    Error404PageResolver,
    // Responsive stuff
    ResponsiveBreakpointsService
  ],
  exports: [
    TopNavbarContentComponent,
    SideMenuContentComponent,
    NotificationsMenuContentComponent,
    // 404
    Error404PageComponent,
    // Responsive stuff
    ResponsiveBreakpointsComponent
  ]
})
export class CoreModule { }
