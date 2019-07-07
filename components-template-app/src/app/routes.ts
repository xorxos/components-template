import { Routes } from '@angular/router';
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

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'forms/controls-and-validations', pathMatch: 'full' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
  { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
  { path: 'miscellaneous/accordions', component: AccordionsComponent },
  { path: 'miscellaneous/alerts', component: AlertsComponent },
  { path: 'miscellaneous/auto-complete', component: AutoCompleteComponent },
  { path: 'miscellaneous/carousels', component: CarouselsComponent },
  { path: 'miscellaneous/date-time-pickers', component: DateTimePickersComponent },
  { path: 'miscellaneous/file-upload', component: FileUploadComponent },
  { path: 'miscellaneous/modals', component: ModalsComponent },
  { path: 'miscellaneous/notifications', component: NotificationsComponent },
  { path: 'miscellaneous/spinners', component: SpinnersComponent },
  { path: 'layouts/grids', component: GridsComponent },
  { path: 'layouts/lists', component: ListsComponent },
  { path: 'layouts/cards', component: CardsComponent },
  { path: 'layouts/tabs', component: TabsComponent }
];