import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('slideUpDown', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ height: 0 }),
        animate(150, style({ height: '*' }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(150, style({ height: 0 }))
      ])
    ])
  ]
})
export class SideBarComponent implements OnInit {

  formsExpanded: boolean = false;
  formsActive: boolean = false;

  tablesExpanded: boolean = false;
  tablesActive: boolean = false;

  chartsExpanded: boolean = false;
  chartsActive: boolean = false;

  miscUtilitiesExpanded: boolean = false;
  miscUtilitiesActive: boolean = false;

  layoutsExpanded: boolean = false;
  layoutsActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.collapseAllMenus();
    this.router.events.subscribe((_: NavigationEnd) =>  {
      if(_.url !== undefined) {
        console.log(_.url)
        this.expandMenu(_.url);
      }
    })
  }

  public collapseAllMenus() {
    this.formsExpanded = false;
    this.tablesExpanded = false;
    this.chartsExpanded = false;
    this.miscUtilitiesExpanded = false;
    this.layoutsExpanded = false;
  }

  public expandMenu(url: string) {
    if ((url.includes('/forms/')) || (url === '/')) {
      this.formsExpanded = true;
      this.formsActive = true;
    }
    if (url.includes('/tables/')) {
      this.tablesExpanded = true;
      this.tablesActive = true;
    }
    if (url.includes('/charts/')) {
      this.chartsExpanded = true;
      this.chartsActive = true;
    }
    if (url.includes('/miscellaneous/')) {
      this.miscUtilitiesExpanded = true;
      this.miscUtilitiesActive = true;
    }
    if (url.includes('/layouts/')) {
      this.layoutsExpanded = true;
      this.layoutsActive = true;
    }
  }

  public activateHeader(header: string) {

    this.inactivateAllHeaders()

    if (header === 'forms') {
      this.formsActive = true
    } else if (header === 'tables') {
      this.tablesActive = true
    } else if (header === 'charts') {
      this.chartsActive = true
    } else if (header === 'misc-utilities') {
      this.miscUtilitiesActive = true
    } else if (header === 'layouts') {
      this.layoutsActive = true
    }
  }

  public inactivateAllHeaders() {
    this.formsActive = false;
    this.tablesActive = false;
    this.chartsActive = false;
    this.miscUtilitiesActive = false;
    this.layoutsActive = false;
  }
}
