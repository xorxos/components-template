import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { rootRoutes } from './routes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from '@angular/common';
import { environment } from './../environments/environment';

import { NavigationService } from './shared/services/navigation.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegularTablesComponent } from './tables/regular-tables/regular-tables.component';
import { CustomTablesComponent } from './tables/custom-tables/custom-tables.component';
import { FilteredTablesComponent } from './tables/filtered-tables/filtered-tables.component';
import { PaginatedTablesComponent } from './tables/paginated-tables/paginated-tables.component';
import { Nvd3ChartsComponent } from './charts/nvd3-charts/nvd3-charts.component';
import { Ng2ChartsComponent } from './charts/ng2-charts/ng2-charts.component';
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
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SpinnersComponent } from './misc-utilities/spinners/spinners.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegularTablesComponent,
    CustomTablesComponent,
    FilteredTablesComponent,
    PaginatedTablesComponent,
    Nvd3ChartsComponent,
    Ng2ChartsComponent,
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
    TopBarComponent,
    SideBarComponent,
    SpinnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(rootRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      useHash: false
    })
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
