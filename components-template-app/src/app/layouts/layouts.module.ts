import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule as ng2ChartsModule } from 'ng2-charts';

import { Ng2ChartsResolver } from '../charts/resolvers/charts.resolver';
import { ChartsDataService } from '../charts/services/charts-data.service';

import { LayoutsService } from './services/layouts.service';
import { ListsResolver, CardsResolver } from './resolvers/layouts.resolver';

import { GridsComponent } from './grids/grids.component';
import { ListsComponent } from './lists/lists.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';

import { SharedModule } from '../shared';

export const layoutsRoutes = [
  {
    path: '',
    redirectTo: 'grids'
  },
  {
    path: 'grids',
    component: GridsComponent
  },
  {
    path: 'lists',
    component: ListsComponent,
    resolve: {
      data : ListsResolver
    }
  },
  {
    path: 'cards',
    component: CardsComponent,
    resolve: {
      data : CardsResolver
    }
  },
  {
    path: 'tabs',
    component: TabsComponent,
    resolve: {
      data : Ng2ChartsResolver
    }
  }
];

@NgModule({
  declarations: [
    GridsComponent,
    ListsComponent,
    CardsComponent,
    TabsComponent
  ],
  providers: [
    ChartsDataService,
    Ng2ChartsResolver,
    ListsResolver,
    CardsResolver,
    LayoutsService
  ],
  imports: [
    RouterModule.forChild(layoutsRoutes),
    CommonModule,
    ng2ChartsModule,
    SharedModule
  ]
})
export class LayoutsModule {}