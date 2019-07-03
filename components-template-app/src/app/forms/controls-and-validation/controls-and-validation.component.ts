import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneValidator } from '../validators/phone.validator';
import { Country } from './country.model';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-controls-and-validation',
  templateUrl: './controls-and-validation.component.html',
  styleUrls: ['./controls-and-validation.component.scss']
})
export class ControlsAndValidationComponent {
  
  // Countries for the phone validation
  countries = new Array<Country>();

  // Form validation messages
  validationMessages = {
    requiredText: [
      { type: 'required', message: 'This field is required.' }
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Email must be valid.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be 8 characters long.'}
    ],
    equal: [
      { type: 'areEqual', message: 'These fields do not match.' }
    ],
    terms: [
      { type: 'pattern', message: 'You must accept the terms and conditions.' }
    ],
    country: [
      { type: 'required', message: 'Country is required.' }
    ],
    phone: [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'Phone number incorrect for the country selected' }
    ],
    textNumber: [
      { type: 'pattern', message: 'Number must be an integer.' }
    ],
    minLength: [
      { type: 'minlength', message: 'Min length is 11.' }
    ],
    maxLength: [
      { type: 'maxlength', message: 'Max length is 8.' }
    ],
    range: [
      { type: 'range', message: 'Range should be a number between 5 and 10.' }
    ],
    minValue: [
      { type: 'min', message: 'Min value is 4.' }
    ],
    maxValue: [
      { type: 'max', message: 'Max value is 5.' }
    ]
  };

  // Full form
  form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private http: HttpClient,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {

    // Countries for the phone validation
    this.http.get<any>(baseHref + '/assets/data/countries.json')
      .subscribe(
        data => {
          data.forEach((c) => {
            this.countries.push(new Country(c.code, c.name));
          });
        }
      );

    const country = new FormControl('', Validators.required);
    this.form = formBuilder.group({
      requiredText: new FormControl('', Validators.required),
      optionalText: new FormControl(''),
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
      equal: formBuilder.group(
        {
          equal1: new FormControl('first'),
          equal2: new FormControl('firs')
        },
        {
          validator: (formGroup: FormGroup) => {
            const e1 = formGroup.get('equal1').value;
            const e2 = formGroup.get('equal2').value;

            return (e1 === e2) ? undefined : { areEqual: true };
          }
        }
      ),
      remember: new FormControl(false),
      terms: new FormControl(true, Validators.pattern('true')),
      country,
      phone: new FormControl('', Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])),
      number: new FormControl('1', Validators.pattern('[0-9]*')),
      textNumber: new FormControl('One', Validators.pattern('[0-9]*')),
      minLength: new FormControl('Too short?', Validators.minLength(11)),
      maxLength: new FormControl('Too long?', Validators.maxLength(8)),
      date: new FormControl({ value: '', disabled: true }),

      range: new FormControl('1', formControl => {
        const value = Number(formControl.value);

        return ((value <= 10) && (value >= 5)) ? undefined : { range: true };
      }),
      minValue: new FormControl('2', formControl => {
        const value = Number(formControl.value);

        return (value >= 4) ? undefined : { min: true };
      }),
      maxValue: new FormControl('8', formControl => {
        const value = Number(formControl.value);

        return (value <= 5) ? undefined : { max: true };
      })
    });
  }

  // Return the sample phone string for the selected country or an empty string if none selected
  samplePhone(): string {
    const iso = this.form.value.country;
    for (const country of this.countries) {
      if (country.iso === iso) {
        return (country.samplePhone);
      }
    }

    return '';
  }

  validateFields(): void {
    if (!this.form.valid) {
      // Mark the form and inputs as touched so the errors messages are shown
      this.form.markAsTouched();
      for (const control in this.form.controls) {
        if (this.form.controls.hasOwnProperty(control)) {
          this.form.controls[control].markAsTouched();
          this.form.controls[control].markAsDirty();
        }
      }
    }
  }

  onSubmit(): void {
    // console.log('model-based form submitted');
    // console.log(this.form.value);
  }

}
