import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';

import { TableDataService } from './services/table-data.service';
import { RegularTablesResolver, ExtendedTablesResolver, MaterialTablesResolver } from './resolvers/tables.resolver';

import { RegularTablesComponent } from './regular-tables/regular-tables.component';
import { CustomTablesComponent } from './custom-tables/custom-tables.component';
import { MaterialTablesComponent } from './material-tables/material-tables.component';

import { NouisliderModule } from 'ng2-nouislider';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

export const tablesRoutes = [
  { path: '', redirectTo: 'regular' },
  {
    path: 'regular-tables',
    component: RegularTablesComponent,
    resolve: {
      tableData : RegularTablesResolver
    }
  },
  {
    path: 'custom-tables',
    component: CustomTablesComponent,
    resolve: {
        tableData : ExtendedTablesResolver
    }
  },
  {
    path: 'material-tables',
    component: MaterialTablesComponent,
    resolve: {
      tableData : MaterialTablesResolver
    }
  }
];

@NgModule({
  declarations: [
    RegularTablesComponent,
    CustomTablesComponent,
    MaterialTablesComponent
  ],

  providers: [
    TableDataService,
    RegularTablesResolver,
    ExtendedTablesResolver,
    MaterialTablesResolver
  ],

  imports: [
    RouterModule.forChild(tablesRoutes),
    NouisliderModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TablesModule { }