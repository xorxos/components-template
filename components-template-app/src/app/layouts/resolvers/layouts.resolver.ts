import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { LayoutsService } from '../services/layouts.service';

@Injectable()
export class ListsResolver implements Resolve<any> {

  constructor(private layoutsService: LayoutsService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/layouts/lists', label: 'Lists' }
      ];
      this.layoutsService.getListsData()
      .then((data: any) => {
        return resolve({
          latest_articles_list: data.latest_articles_list,
          latest_articles_small_list: data.latest_articles_small_list,
          freelancers_list: data.freelancers_list,
          users_list: data.users_list,
          expenses_list: data.expenses_list,
          // breadcrumbs: breadcrumbs
        });
      });
    });
  }
}

@Injectable()
export class CardsResolver implements Resolve<any> {

  constructor(private layoutsService: LayoutsService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/layouts/cards', label: 'Cards' }
      ];

      this.layoutsService.getCardsData()
      .then((data: any) => {
        return resolve({
          cards2: data.cards2,
          cards3: data.cards3,
          cards4: data.cards4,
          // breadcrumbs: breadcrumbs
        });
      });
    });
  }
}
