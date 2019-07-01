import { NgModule } from '@angular/core';

import { ResponsiveBreakpointsComponent } from './responsive-breakpoints/responsive-breakpoints.component';
import { ResponsiveBreakpointDirective } from './responsive-breakpoints/responsive-breakpoint.directive';
import { ResponsiveBreakpointsService } from './responsive-breakpoints/responsive-breakpoints.service';


@NgModule({
  declarations: [
    // Responsive stuff
    ResponsiveBreakpointDirective,
    ResponsiveBreakpointsComponent
  ],
  imports: [
  ],
  providers: [
    ResponsiveBreakpointsService
  ],
  exports: [
    // Responsive stuff
    ResponsiveBreakpointsComponent
  ]
})
export class CoreModule { }