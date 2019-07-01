import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Directive({
  selector: '[appResponsiveBreakpoint]'
})
export class ResponsiveBreakpointDirective {
  @Input() screen: string;

  constructor(public element: ElementRef) { }

}
