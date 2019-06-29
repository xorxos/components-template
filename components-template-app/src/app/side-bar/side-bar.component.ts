import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
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
