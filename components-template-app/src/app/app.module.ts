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

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TablesComponent,
    ChartsComponent,
    HomeComponent,
    MiscUtilitiesComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
