import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { HomeComponent } from './home/home.component';
import { MiscUtilitiesComponent } from './misc-utilities/misc-utilities.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ControlsAndValidationComponent } from './forms/controls-and-validation/controls-and-validation.component';
import { ControlsExtendedComponent } from './forms/controls-extended/controls-extended.component';
import { SampleRegistrationsComponent } from './forms/sample-registrations/sample-registrations.component';
import { SampleLoginsComponent } from './forms/sample-logins/sample-logins.component';
import { MaterialFormsComponent } from './forms/material-forms/material-forms.component';
import { RegularTablesComponent } from './tables/regular-tables/regular-tables.component';
import { CustomTablesComponent } from './tables/custom-tables/custom-tables.component';
import { FilteredTablesComponent } from './tables/filtered-tables/filtered-tables.component';
import { PaginatedTablesComponent } from './tables/paginated-tables/paginated-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TablesComponent,
    ChartsComponent,
    HomeComponent,
    MiscUtilitiesComponent,
    LayoutsComponent,
    ControlsAndValidationComponent,
    ControlsExtendedComponent,
    SampleRegistrationsComponent,
    SampleLoginsComponent,
    MaterialFormsComponent,
    RegularTablesComponent,
    CustomTablesComponent,
    FilteredTablesComponent,
    PaginatedTablesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
