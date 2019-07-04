import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-registrations',
  templateUrl: './sample-registrations.component.html',
  styleUrls: ['./sample-registrations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleRegistrationsComponent {
  stackedRegistration: FormGroup;
  horizontalRegistration: FormGroup;
  noLabelRegistration: FormGroup;

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
      { type: 'minlength', message: 'Password must be 8 characters long.' }
    ],
    equal: [
      { type: 'areEqual', message: 'Password fields do not match.' }
    ]
  };

  constructor(fb: FormBuilder) {
    this.stackedRegistration = fb.group({
      email: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      equal: fb.group(
        {
          passGroup: fb.group({
            password: new FormControl('', Validators.compose([
              Validators.minLength(8),
              Validators.required
            ]))
          }),
          confirmPassword: new FormControl('', Validators.required)
        },
        {
          validator: (formGroup: FormGroup) => {
            const e1 = formGroup.get('passGroup').get('password').value;
            const e2 = formGroup.get('confirmPassword').value;

            return (e1 === e2) ? undefined : { areEqual: true };
          }
        }
      )

    });
    this.horizontalRegistration = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
    this.horizontalRegistration = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

}
