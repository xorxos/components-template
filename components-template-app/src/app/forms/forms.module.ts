import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NouisliderModule } from 'ng2-nouislider';

import { ControlsAndValidationComponent } from './controls-and-validation/controls-and-validation.component';
import { ControlsExtendedComponent } from './controls-extended/controls-extended.component';
import { SampleRegistrationsComponent } from './sample-registrations/sample-registrations.component';
import { SampleLoginsComponent } from './sample-logins/sample-logins.component';
import { MaterialFormsComponent } from './material-forms/material-forms.component';

import { SharedModule } from '../shared/shared.module';

export const formsRoutes = [
    {
      path: 'controls-and-validations',
      component: ControlsAndValidationComponent
    },
    {
      path: 'extended-controls',
      component: ControlsExtendedComponent
    },
    {
      path: 'sample-logins',
      component: SampleLoginsComponent
    },
    {
      path: 'sample-registrations',
      component: SampleRegistrationsComponent
    },
    {
      path: 'material-forms',
      component: MaterialFormsComponent
    }
  ];

@NgModule({
  declarations: [
    ControlsAndValidationComponent,
    ControlsExtendedComponent,
    SampleRegistrationsComponent,
    SampleLoginsComponent,
    MaterialFormsComponent,
  ],
  imports: [
    RouterModule.forChild(formsRoutes),
    SharedModule,
    NouisliderModule
  ],
  providers: [
    
  ],
  exports: []
})

export class FormsModule { }