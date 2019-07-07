import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NvD3Module } from 'ng2-nvd3';
import { ChartsModule as ng2ChartsModule } from 'ng2-charts';

import 'chart.js';
import 'd3';
import 'nvd3';

import { MatTabsModule } from '@angular/material';

import { ChartsDataService } from './services/charts-data.service';
import { Ng2ChartsResolver, Ng2Nvd3ChartsResolver } from './resolvers/charts.resolver';
import { Nvd3ChartsComponent } from './nvd3-charts/nvd3-charts.component';
import { Ng2ChartsComponent } from './ng2-charts/ng2-charts.component';

export const chartsRoutes = [
  {
    path: 'ng2charts',
    component: Ng2ChartsComponent,
    resolve: {
      data : Ng2ChartsResolver
    }
  },
  {
    path: 'nvd3charts',
    component: Nvd3ChartsComponent,
    resolve: {
      data : Ng2Nvd3ChartsResolver
    }
  }
];

@NgModule({
  declarations: [
    Nvd3ChartsComponent,
    Ng2ChartsComponent
  ],

  providers: [
    ChartsDataService,
    Ng2ChartsResolver,
    Ng2Nvd3ChartsResolver
  ],

  imports: [
    RouterModule.forChild(chartsRoutes),
    CommonModule,
    MatTabsModule,
    NvD3Module,
    ng2ChartsModule
  ]
})
export class ChartsModule { }