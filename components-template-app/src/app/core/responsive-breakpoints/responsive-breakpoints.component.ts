import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { ResponsiveBreakpointsService } from './responsive-breakpoints.service';
import { ResponsiveBreakpointDirective } from './responsive-breakpoint.directive';

@Component({
  selector: 'app-responsive-breakpoints',
  styleUrls: ['./styles/responsive-breakpoints.scss'],
  templateUrl: './responsive-breakpoints.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ResponsiveBreakpointsComponent implements AfterViewInit {
  @ViewChildren(ResponsiveBreakpointDirective) breakpoints: QueryList<ResponsiveBreakpointDirective>;

  constructor(
    private responsiveService: ResponsiveBreakpointsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Client code only
      const breakpointObserverOptions = {
        threshold: 0.90
      };

      this.breakpoints.forEach(breakpoint => {

        const breakpointObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.target === breakpoint.element.nativeElement) {
              const inView: boolean = (entry.intersectionRatio > 0.90) ? true : false;

              this.responsiveService.responsiveSubject.next({ screen: breakpoint.screen, active: inView});
            }
          });
        }, breakpointObserverOptions);

        breakpointObserver.observe(breakpoint.element.nativeElement);
      });
    } else {
      // Server code only
    }
  }
}
