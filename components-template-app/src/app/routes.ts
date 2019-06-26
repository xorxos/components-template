import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
    { path: 'forms', component: FormsComponent }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)