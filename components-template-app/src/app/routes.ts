import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlsAndValidationComponent } from './forms/controls-and-validation/controls-and-validation.component';
import { ControlsExtendedComponent } from './forms/controls-extended/controls-extended.component';
import { MaterialFormsComponent } from './forms/material-forms/material-forms.component';
import { SampleLoginsComponent } from './forms/sample-logins/sample-logins.component';
import { SampleRegistrationsComponent } from './forms/sample-registrations/sample-registrations.component';
import { RegularTablesComponent } from './tables/regular-tables/regular-tables.component';
import { CustomTablesComponent } from './tables/custom-tables/custom-tables.component';
import { PaginatedTablesComponent } from './tables/paginated-tables/paginated-tables.component';
import { FilteredTablesComponent } from './tables/filtered-tables/filtered-tables.component';
import { Ng2ChartsComponent } from './charts/ng2-charts/ng2-charts.component';
import { Nvd3ChartsComponent } from './charts/nvd3-charts/nvd3-charts.component';
import { AccordionsComponent } from './misc-utilities/accordions/accordions.component';
import { AlertsComponent } from './misc-utilities/alerts/alerts.component';
import { AutoCompleteComponent } from './misc-utilities/auto-complete/auto-complete.component';
import { CarouselsComponent } from './misc-utilities/carousels/carousels.component';
import { DateTimePickersComponent } from './misc-utilities/date-time-pickers/date-time-pickers.component';
import { FileUploadComponent } from './misc-utilities/file-upload/file-upload.component';
import { ModalsComponent } from './misc-utilities/modals/modals.component';
import { NotificationsComponent } from './misc-utilities/notifications/notifications.component';
import { SpinnersComponent } from './misc-utilities/spinners/spinners.component';
import { GridsComponent } from './layouts/grids/grids.component';
import { ListsComponent } from './layouts/lists/lists.component';
import { CardsComponent } from './layouts/cards/cards.component';
import { TabsComponent } from './layouts/tabs/tabs.component';

const appRoutes: Routes = [
    { path: 'forms/controls_and_validation', component: ControlsAndValidationComponent },
    { path: 'forms/extended_controls', component: ControlsExtendedComponent },
    { path: 'forms/material_forms', component: MaterialFormsComponent },
    { path: 'forms/sample_logins', component: SampleLoginsComponent },
    { path: 'forms/sample_registrations', component: SampleRegistrationsComponent },
    { path: 'tables/regular_tables', component: RegularTablesComponent },
    { path: 'tables/custom_tables', component: CustomTablesComponent },
    { path: 'tables/paginated_tables', component: PaginatedTablesComponent },
    { path: 'tables/filtered_tables', component: FilteredTablesComponent },
    { path: 'charts/ng2_charts', component: Ng2ChartsComponent },
    { path: 'charts/nvd3_charts', component: Nvd3ChartsComponent },
    { path: 'miscellaneous/accordions', component: AccordionsComponent },
    { path: 'miscellaneous/alerts', component: AlertsComponent },
    { path: 'miscellaneous/auto_complete', component: AutoCompleteComponent },
    { path: 'miscellaneous/carousels', component: CarouselsComponent },
    { path: 'miscellaneous/date_time_pickers', component: DateTimePickersComponent },
    { path: 'miscellaneous/file_upload', component: FileUploadComponent },
    { path: 'miscellaneous/modals', component: ModalsComponent },
    { path: 'miscellaneous/notifications', component: NotificationsComponent },
    { path: 'miscellaneous/spinners', component: SpinnersComponent },
    { path: 'layouts/grids', component: GridsComponent },
    { path: 'layouts/lists', component: ListsComponent },
    { path: 'layouts/cards', component: CardsComponent },
    { path: 'layouts/tabs', component: TabsComponent },
    { path: '', redirectTo: '/forms/controls_and_validation', pathMatch: 'full'}
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)