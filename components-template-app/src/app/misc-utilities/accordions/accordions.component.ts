import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionsComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  displayMode: string = 'default';
  multi = false;
  hideToggle = false;
  disabled = false;
  expandedHeight: string;
  collapsedHeight: string;

}
