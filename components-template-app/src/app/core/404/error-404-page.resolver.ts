import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class Error404PageResolver implements Resolve<any> {

  constructor(

  ) { }

  resolve() {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/', label: '404' }
      ];

      return resolve({
        // breadcrumbs: breadcrumbs
      });
    });
  }
}
