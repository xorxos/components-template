import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-tables',
  templateUrl: './custom-tables.component.html',
  styleUrls: ['./custom-tables.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CustomTablesComponent {

  displayedColumns: string[] = ['picture', 'name', 'status', 'progress', 'comments', 'policy'];
  dataSource = undefined;

  constructor(private route: ActivatedRoute) {
    this.dataSource = route.snapshot.data['tableData'].data;
  }

}
