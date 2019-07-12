import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Material modules
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatDatepickerModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { PreloadImageComponent } from './preload-image/preload-image.component';
import { AlertComponent } from './alert/alert.component';
import { NotificationComponent } from './notification/notification.component';
import { FileUploaderDirective } from './file-uploader/file-uploader.directive';



@NgModule({
  declarations: [
    // Shared components
    PreloadImageComponent,
    AlertComponent,
    NotificationComponent,
    FileUploaderDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // Material modules
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    AlertComponent,
    NotificationComponent
  ],
  providers: [

  ],
  exports: [
    // Shared components
    PreloadImageComponent,
    AlertComponent,
    NotificationComponent,
    FileUploaderDirective,
    // Re-export these modules to prevent repeated imports (see: https://angular.io/guide/ngmodule#re-exporting-other-modules)
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // Material modules
    MatAutocompleteModule,
    MatCheckboxModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule { }