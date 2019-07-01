import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public sidebarCollapsed:boolean

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationService.sidebarCollapsedObservable.subscribe(bool => this.sidebarCollapsed = bool)
  }

  public toggleSidebar() {
    this.navigationService.toggleSideBar()
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
  }
}
