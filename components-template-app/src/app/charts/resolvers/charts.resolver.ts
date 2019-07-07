import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ChartsDataService } from '../services/charts-data.service';

@Injectable()
export class Ng2ChartsResolver implements Resolve<any> {

  constructor(private chartsDataService: ChartsDataService) {}

  resolve(): any {
    return new Promise((resolve, reject) => {
      this.chartsDataService.getNg2ChartsData().then((data: any) => {
        return resolve(data);
      });
    });
  }
}

@Injectable()
export class Ng2Nvd3ChartsResolver implements Resolve<any> {

  constructor(private chartsDataService: ChartsDataService) {}

  resolve(): any {
    return new Promise((resolve, reject) => {
      this.chartsDataService.getNg2Nvd3ChartsData().then((data: any) => {
        return resolve(data);
      });
    });
  }
}
