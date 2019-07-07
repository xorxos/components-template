import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { rootRoutes } from './routes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from '@angular/common';
import { environment } from './../environments/environment';

import { NavigationService } from './shared/services/navigation.service';

import { AppComponent } from './app.component';
import { GridsComponent } from './layouts/grids/grids.component';
import { ListsComponent } from './layouts/lists/lists.component';
import { CardsComponent } from './layouts/cards/cards.component';
import { TabsComponent } from './layouts/tabs/tabs.component';
import { ModalsComponent } from './misc-utilities/modals/modals.component';
import { AlertsComponent } from './misc-utilities/alerts/alerts.component';
import { FileUploadComponent } from './misc-utilities/file-upload/file-upload.component';
import { AutoCompleteComponent } from './misc-utilities/auto-complete/auto-complete.component';
import { NotificationsComponent } from './misc-utilities/notifications/notifications.component';
import { DateTimePickersComponent } from './misc-utilities/date-time-pickers/date-time-pickers.component';
import { CarouselsComponent } from './misc-utilities/carousels/carousels.component';
import { AccordionsComponent } from './misc-utilities/accordions/accordions.component';
import { SpinnersComponent } from './misc-utilities/spinners/spinners.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    GridsComponent,
    ListsComponent,
    CardsComponent,
    TabsComponent,
    ModalsComponent,
    AlertsComponent,
    FileUploadComponent,
    AutoCompleteComponent,
    NotificationsComponent,
    DateTimePickersComponent,
    CarouselsComponent,
    AccordionsComponent,
    SpinnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      useHash: false
    }),
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NavigationService,
    {
      provide: APP_BASE_HREF,
      useValue: `${environment.BASE_URL}`
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
