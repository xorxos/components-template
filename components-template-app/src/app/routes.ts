import { Routes } from '@angular/router';

export const rootRoutes: Routes = [
  { path: '', redirectTo: 'forms/controls-and-validations', pathMatch: 'full' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
  { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
  { path: 'miscellaneous', loadChildren: './misc-utilities/misc-utilities.module#MiscUtilitiesModule' },
  { path: 'layouts', loadChildren: './layouts/layouts.module#LayoutsModule' }
];