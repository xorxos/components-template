import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class TableDataService {
  baseUrl = '';

  constructor(
    private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.baseUrl = baseHref;
  }

  getRegularTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/regular_table.json')
      .subscribe(
        data => {
          resolve (data);
        },
        err => reject()
      );
    });
  }

  getExtendedTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/extended_table.json')
      .subscribe(
        data => {
          resolve (data);
        },
        err => reject()
      );
    });
  }

  getMaterialTableData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/assets/data/material_table.json')
      .subscribe(
        data => {
          resolve (data);
        },
        err => reject()
      );
    });
  }
}