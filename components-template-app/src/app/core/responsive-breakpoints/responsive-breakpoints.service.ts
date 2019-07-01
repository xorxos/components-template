import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ResponsiveBreakpointsService {
  responsiveSubject: Subject<any> = new Subject();

  constructor() {}
}
