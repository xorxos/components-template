import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ControlsAndValidationComponent } from './controls-and-validation/controls-and-validation.component';
import { ControlsExtendedComponent } from './controls-extended/controls-extended.component';
import { SampleRegistrationsComponent } from './sample-registrations/sample-registrations.component';
import { SampleLoginsComponent } from './sample-logins/sample-logins.component';
import { MaterialFormsComponent } from './material-forms/material-forms.component';
import { FormsValidationsResolver, FormsExtendedControlsResolver, FormsLayoutsResolver, MaterialFormsResolver } from './forms.resolver';
import { SharedModule } from '../shared/shared.module';

export const formsRoutes = [
    {
      path: 'controls-and-validations',
      component: ControlsAndValidationComponent,
      resolve: {
        data: FormsValidationsResolver
      }
    },
    {
      path: 'extended-controls',
      component: ControlsExtendedComponent,
      resolve: {
        data: FormsExtendedControlsResolver
      }
    },
    {
      path: 'sample-logins',
      component: SampleLoginsComponent,
      resolve: {
        data: FormsLayoutsResolver
      }
    },
    {
      path: 'sample-registrations',
      component: SampleRegistrationsComponent
    },
    {
      path: 'material-forms',
      component: MaterialFormsComponent,
      resolve: {
        data: MaterialFormsResolver
      }
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
    SharedModule
  ],
  providers: [
    FormsValidationsResolver,
    FormsExtendedControlsResolver,
    FormsLayoutsResolver,
    MaterialFormsResolver,
  ],
  exports: []
})

export class FormsModule { }