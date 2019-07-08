import { Routes } from '@angular/router';
import { GridsComponent } from './layouts/grids/grids.component';
import { ListsComponent } from './layouts/lists/lists.component';
import { CardsComponent } from './layouts/cards/cards.component';
import { TabsComponent } from './layouts/tabs/tabs.component';

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'forms/controls-and-validations', pathMatch: 'full' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
  { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
  { path: 'miscellaneous', loadChildren: './misc-utilities/misc-utilities.module#MiscUtilitiesModule' },
  { path: 'layouts/grids', component: GridsComponent },
  { path: 'layouts/lists', component: ListsComponent },
  { path: 'layouts/cards', component: CardsComponent },
  { path: 'layouts/tabs', component: TabsComponent }
];