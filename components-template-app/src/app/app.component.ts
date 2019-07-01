import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./shared/styles/app.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'components-template-app';
}
