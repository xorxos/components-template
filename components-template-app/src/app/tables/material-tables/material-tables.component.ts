import { Component, ViewChild, ViewEncapsulation, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { MatChipInputEvent, MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';

const COMMA = 188;
const ENTER = 13;

export interface RowData {
  picture: string;
  name: string;
  country: string;
  interests: string;
  subscribed: string;
  age: Number;
  status: string;
}

@Component({
  selector: 'app-material-tables',
  templateUrl: './material-tables.component.html',
  styleUrls: ['./material-tables.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class MaterialTablesComponent implements OnInit {

  // Table 1 - external filters
  displayedColumnsTable1: string[] = ['picture', 'name', 'country', 'interests', 'subscribed', 'age', 'status'];
  dataSourceTable1: MatTableDataSource<RowData>;
  @ViewChild('paginatorTable1') paginatorTable1: MatPaginator;
  @ViewChild('sortTable1') sortTable1: MatSort;

// Table 2 - local filters
  displayedColumnsTable2: string[] = ['select', 'picture', 'name', 'country', 'interests', 'subscribed', 'age', 'status'];
  dataSourceTable2: MatTableDataSource<RowData>;
  @ViewChild('paginatorTable2') paginatorTable2: MatPaginator;
  @ViewChild('sortTable2') sortTable2: MatSort;
  selection = new SelectionModel<RowData>(true, []);

  // Filters for the smart table
  filtersForm: FormGroup;
  filtersVisible = true;
  toggleFiltersLabel = 'Hide filters';

  // Data from the resolver
  originalData = [];

  // Tags interests
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes = [COMMA, ENTER];
  interests = [];

  isBrowser: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private datePipe: DatePipe,
    @Inject(PLATFORM_ID) private platformId: Object
  ) 
  {
    this.isBrowser = isPlatformBrowser(platformId);

    this.originalData = route.snapshot.data['tableData'].data;

    this.dataSourceTable1 = new MatTableDataSource(this.originalData);
    this.dataSourceTable2 = new MatTableDataSource(this.originalData);

    // Set up the form
    this.filtersForm = fb.group({
      search : '',
      ageRange: [[20, 50]],
      interests: [[]],
      subscribed: ''
    });
    this.filtersForm.valueChanges.subscribe(form => { this.table1Filter(form); });
  }


  ngOnInit() {
    this.dataSourceTable2.paginator = this.paginatorTable2;
    // define a custom sort for the date field
    this.dataSourceTable2.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'subscribed': return new Date(item.subscribed);
        default: return item[property];
      }
    };
    this.dataSourceTable2.sort = this.sortTable2;


    this.dataSourceTable1.paginator = this.paginatorTable1;
    this.dataSourceTable1.sort = this.sortTable1;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSourceTable2.data.length;
    return numSelected === numRows;
  }

   /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSourceTable2.data.forEach(row => this.selection.select(row));
  }

  applyFilterTable1(filterValue: string) {
    this.dataSourceTable1.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceTable1.paginator) {
      this.dataSourceTable1.paginator.firstPage();
    }
  }

  applyFilterTable2(filterValue: string) {
    this.dataSourceTable2.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceTable2.paginator) {
      this.dataSourceTable2.paginator.firstPage();
    }
  }

  // Show or hide the available filters
  toggleFilters(): void {
    this.filtersVisible = !this.filtersVisible;
    this.toggleFiltersLabel = this.filtersVisible ? 'Hide filters' : 'Show filters';
  }

  // Reset all the filters values
  clearFilters(): void {
    this.filtersForm.reset({
      search: '',
      ageRange: [0, 100],
      interests: [],
      subscribed: ''
    });

    this.interests = [];

    this.applyFilterTable1('');
    this.table1Filter(this.filtersForm.value);
  }

  resetDatePicker(): void {
    this.filtersForm.controls.subscribed.reset('');
  }

  // Check if a string contains another
  stringContains(haystack, needle): boolean {
    return (haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1);
  }

  // Check if a interest contains a string
  interestsContain(rowInterest, interests): boolean {
    for (const interest of interests) {
      if (this.stringContains(rowInterest, interest)) {
        return true;
      }
    }
    return (interests.length === 0);
  }

  // Run the filters for the smart table
  table1Filter(form): void {
    const ageRange = form.ageRange;
    const interests = this.interests;
    const subscribed = form.subscribed;

    const results = [];
    this.originalData.forEach(row => {
      const filter_date = this.datePipe.transform(subscribed, 'yyyy-MM-dd');
      if (
        (ageRange[0] <= row.age) && (ageRange[1] >= row.age) &&
        (this.interestsContain(row.interests, interests)) &&
        ((subscribed === '') || (new Date(filter_date) > new Date(row.subscribed)))
      ) {
        results.push(row);
      }
    });
    this.dataSourceTable1.data = results;
  }

  // Interest tags
  addInterest(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.interests.push(value.trim());
      this.table1Filter(this.filtersForm.value);
    }

    if (input) {
      input.value = '';
    }
  }

  removeInterest(interest: any): void {
    const index = this.interests.indexOf(interest);
    if (index >= 0) {
      this.interests.splice(index, 1);
      this.table1Filter(this.filtersForm.value);
    }
  }

}
