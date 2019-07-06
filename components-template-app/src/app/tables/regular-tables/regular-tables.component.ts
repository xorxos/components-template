import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regular-tables',
  templateUrl: './regular-tables.component.html',
  styleUrls: ['./regular-tables.component.scss']
})
export class RegularTablesComponent {

  displayedColumns: string[] = ['id', 'name', 'country', 'city', 'birthday', 'age', 'salary'];
  dataSource = undefined;

  constructor(private route: ActivatedRoute) {
    this.dataSource = route.snapshot.data['tableData'].data;
  }

}
