import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class FormsValidationsResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/forms/controls-and-validations', label: 'Form Controls & Validations' }
      ];

      return resolve({
        // breadcrumbs: breadcrumbs
      });
    });
  }
}

@Injectable()
export class FormsExtendedControlsResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/forms/extended-controls', label: 'Form Extended Controls' }
      ];

      return resolve({
        // breadcrumbs: breadcrumbs
      });
    });
  }
}

@Injectable()
export class FormsLayoutsResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/forms/sample-layouts', label: 'Form Sample Layouts' }
      ];

      return resolve({
        // breadcrumbs: breadcrumbs
      });
    });
  }
}

@Injectable()
export class MaterialFormsResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {
      const breadcrumbs = [
        { url: '/forms/material-forms', label: 'Material Forms' }
      ];

      return resolve({
        // breadcrumbs: breadcrumbs
      });
    });
  }
}