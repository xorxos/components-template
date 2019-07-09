import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AutoCompleterService } from '../services/auto-completer.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompleteComponent {

  options = {
    simple: [],
    images: []
  };

  constructor(private autoCompleterService: AutoCompleterService) {}

  filter(event, type): void {
    const input = event.target.value;
    if (input === '') {
      this.options[type] = [];
    } else {
      this.autoCompleterService.getData(input).then((res: any) => {
        this.options[type] = res;
      });
    }
  }

}
