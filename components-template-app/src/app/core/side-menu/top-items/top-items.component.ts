import { Component, Input, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-top-items',
  templateUrl: './top-items.component.html',
  styleUrls: [
    './styles/top-items.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('menuState', [
      state('condensed', style({
        backgroundColor: 'blue'
      })),
      state('expanded',   style({
        backgroundColor: 'white'
      })),
      transition('condensed => expanded', animate('100ms ease-in')),
      transition('expanded => condensed', animate('100ms ease-out'))
    ])
  ]
})

export class MenuTopItemsComponent {
  @Input() menuState = 'expanded';

  constructor() {
  }
}
