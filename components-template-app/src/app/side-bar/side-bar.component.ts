import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('slideUpDown', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ height: 0 }),
        animate(100, style({ height: '*' }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(100, style({ height: 0 }))
      ])
    ])
  ]
})
export class SideBarComponent implements OnInit {
  activatedUrl: string

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

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.activatedUrl = location.pathname;
    this.collapseAllMenus();
    this.expandMenu(this.activatedUrl);
  }

  public collapseAllMenus() {
    this.formsExpanded = false;
    this.tablesExpanded = false;
    this.chartsExpanded = false;
    this.miscUtilitiesExpanded = false;
    this.layoutsExpanded = false;
  }

  public expandMenu(url: string) {
    if (url.includes('/forms/')) {
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
