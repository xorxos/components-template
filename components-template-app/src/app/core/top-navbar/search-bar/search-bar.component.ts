import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith ,  map } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  styleUrls: ['./styles/search-bar.scss'],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

  searchBar = new FormControl();

  options = [
    'Charts',
    'Dashboard',
    'Forms',
    'Layouts',
    'Tables',
    'Utils'
  ];

  filteredOptions: Observable<Array<string>>;

  ngOnInit(): void {
    this.filteredOptions = this.searchBar.valueChanges
      .pipe(
        startWith(undefined),
        map(val => val ? this.filter(val) : this.options.slice())
      );
  }

  filter(val: string): Array<string> {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }
}
