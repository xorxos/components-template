import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('slideUpDown', [
      transition(':enter', [   // :enter is alias to 'void => *'
      style({height:0}),
      animate(100, style({height:'*'})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(100, style({height:0})) 
    ])
    ])
  ]
})
export class SideBarComponent implements OnInit {
  formsExpanded: boolean = true;
  tablesExpanded: boolean = false;
  chartsExpanded: boolean = false;
  miscUtilitiesExpanded: boolean = false;
  layoutsExpanded: boolean = false;
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }
}
