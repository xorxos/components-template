import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInOut', [
      state('true', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('false', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('true => false', animate('200ms ease-in-out')),
      transition('false => true', animate('200ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  public sidebarCollapsed:boolean
  
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.sidebarCollapsedObservable.subscribe(bool => this.sidebarCollapsed = bool)
  }

  

}
