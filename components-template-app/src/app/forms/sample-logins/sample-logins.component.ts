import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sample-logins',
  templateUrl: './sample-logins.component.html',
  styleUrls: ['./sample-logins.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleLoginsComponent {
  loginFormStacked: FormGroup;
  loginFormHorizontal: FormGroup;
  loginFormNoLabels: FormGroup;
  loginFormGoogleEtc: FormGroup;

  constructor(fb: FormBuilder) { 
    this.loginFormStacked = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(true)
    });
    this.loginFormHorizontal = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(true)
    });
    this.loginFormNoLabels = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(true)
    });
    this.loginFormGoogleEtc = fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
      remember: new FormControl(true)
    });
  }

}
