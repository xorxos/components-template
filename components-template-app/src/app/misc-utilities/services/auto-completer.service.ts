import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AutoCompleterService {
  options = undefined;

  constructor(private http: HttpClient) {}

  getData(filter): Promise<any> {
    if (this.options) {
      return new Promise((resolve, reject) => {
        resolve(this.filterOptions(filter));
      });
    } else {
      return new Promise((resolve, reject) => {
        this.http.get('../../assets/data/autocomplete.json')
        .subscribe(
          data => {
            this.options = data;
            resolve(this.filterOptions(filter));
          },
          err => reject()
        );
      });
    }
  }

  filterOptions(filter): Array<String> {
    return (this.options.filter(
      option => this.fuzzysearch(filter, option.title)
    ));
  }

  // Credit: https://github.com/bevacqua/fuzzysearch
  fuzzysearch(needle, haystack): Boolean {
    const hlen = haystack.length;
    const nlen = needle.length;

    if (nlen > hlen) { return false; }

    needle = needle.toLowerCase();
    haystack = haystack.toLowerCase();

    let nIdx = 0;
    let hIdx = 0;
    while (nIdx < nlen) {
      if (hIdx >= hlen) { return false; }
      if (needle.charCodeAt(nIdx) === haystack.charCodeAt(hIdx++)) { nIdx++; }
    }

    return true;
  }
}
