import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsComponent {
  
  baseUrl = '';

  cards2 = undefined;
  cards3 = undefined;
  cards4 = undefined;

  constructor(private route: ActivatedRoute) {
    const data = route.snapshot.data['data'];
    this.cards2 = data.cards2;
    this.cards3 = data.cards3;
    this.cards4 = data.cards4;
  }

}
