import { Component, ViewEncapsulation, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material';
import { isPlatformBrowser } from '@angular/common';

const COMMA = 188;
const ENTER = 13;

@Component({
  selector: 'app-controls-extended',
  templateUrl: './controls-extended.component.html',
  styleUrls: ['./controls-extended.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ControlsExtendedComponent {

  controlsForm: FormGroup;
  formElements: FormGroup;

  // Tags inputs
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes = [COMMA, ENTER];
  chips = {
    regular: [
      'MINIMAL',
      'LIGHT',
      'NEW' ,
      'FRIENDS'
    ],
    filled: [
      'MINIMAL',
      'LIGHT',
      'NEW' ,
      'FRIENDS'
    ]
  };
  isBrowser: boolean;

  constructor(fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.controlsForm = fb.group({
      help: new FormControl(''),
      password: new FormControl(''),
      placeholder: new FormControl(''),
      disabled: new FormControl({value: 'Disabled', disabled: true}),
      color: new FormControl(''),
      message: new FormControl(''),
      radio: new FormControl(''),
      checkbox1: new FormControl(''),
      checkbox2: new FormControl(''),
      checkbox3: new FormControl(''),
      checkbox4: new FormControl(false),
      checkbox5: new FormControl(true),
      checkbox6: new FormControl({value: false, disabled: true}),
      checkbox7: new FormControl({value: true, disabled: true}),
      radio1: new FormControl('second'),
      radio2: new FormControl({value: 'fourth', disabled: true}),
      success: new FormControl(''),
      error: new FormControl(''),
      addon1: new FormControl(''),
      addon2: new FormControl(''),
      column1: new FormControl(''),
      column2: new FormControl(''),
      column3: new FormControl(''),
      column4: new FormControl(''),
      column5: new FormControl(''),
      animal: new FormControl('')
    });

    this.formElements = fb.group({
      nouislider: [[20, 50]],
      slider: new FormControl('30')
    });
  }

  add(event: MatChipInputEvent, chipList: string): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chips[chipList].push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  remove(chip: any, chipList: string): void {
    const index = this.chips[chipList].indexOf(chip);
    if (index >= 0) {
      this.chips[chipList].splice(index, 1);
    }
  }


}
