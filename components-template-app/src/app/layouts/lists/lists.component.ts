import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

  latest_articles_list = undefined;
  latest_articles_small_list = undefined;
  freelancers_list = undefined;
  users_list = undefined;
  expenses_list = undefined;

  constructor(private route: ActivatedRoute) {
    const data = route.snapshot.data['data'];
    this.latest_articles_list = data.latest_articles_list;
    this.freelancers_list = data.freelancers_list;
    this.latest_articles_small_list = data.latest_articles_small_list;
    this.users_list = data.users_list;
    this.expenses_list = data.expenses_list;
  }

}
