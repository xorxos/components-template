import { Component, Input, ViewEncapsulation, NgZone, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SideMenuService } from '../../side-menu/side-menu.service';

@Component({
  selector: 'app-condense',
  templateUrl: './condense.component.html',
  styleUrls: [
    './styles/condense.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('condense', [
      state('condensed', style({
        width: '50px'
      })),
      state('expanded',   style({
        width: '260px'
      })),
      transition('condensed => expanded', animate('100ms ease-in')),
      transition('expanded => condensed', animate('100ms ease-out'))
    ])
  ]
})

export class CondenseMenuComponent {
  @Input() menuState = 'expanded';

  constructor(
    private sideMenuService: SideMenuService,
    private zone: NgZone,
    private changeRef: ChangeDetectorRef
  ) {
  }

  toggleState(): void {
    this.menuState = (this.menuState === 'expanded' ? 'condensed' : 'expanded');
  }

  animationDone(e): void {
    this.sideMenuService.drawerContainer._updateContentMargins();
  }

}
