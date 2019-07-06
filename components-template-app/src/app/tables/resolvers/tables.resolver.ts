import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TableDataService } from '../services/table-data.service';

@Injectable()
export class RegularTablesResolver implements Resolve<any> {

  constructor(private tableDataService: TableDataService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getRegularTableData()
      .then((tableData: any) => {
        return resolve({
          data: tableData
        });
      });
    });
  }
}

@Injectable()
export class ExtendedTablesResolver implements Resolve<any> {

  constructor(private tableDataService: TableDataService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getExtendedTableData()
      .then((tableData: any) => {
        return resolve({
          data: tableData
        });
      });
    });
  }
}

@Injectable()
export class MaterialTablesResolver implements Resolve<any> {

  constructor(private tableDataService: TableDataService) {}

  resolve() {
    return new Promise((resolve, reject) => {
      this.tableDataService.getMaterialTableData()
      .then((tableData: any) => {
        return resolve({
          data: tableData
        });
      });
    });
  }
}