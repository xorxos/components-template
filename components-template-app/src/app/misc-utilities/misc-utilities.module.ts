import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';

import { AccordionsComponent } from './accordions/accordions.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { DateTimePickersComponent } from './date-time-pickers/date-time-pickers.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { AutoCompleterService } from './services/auto-completer.service';

import { LoginModalComponent } from './modals/templates/login/login.component';
import { RegisterModalComponent } from './modals/templates/register/register.component';

export const utilRoutes = [
    {
        path: '',
        redirectTo: 'accordions'
    },
    {
        path: 'accordions',
        component: AccordionsComponent
    },
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: 'auto-complete',
        component: AutoCompleteComponent
    },
    {
        path: 'carousels',
        component: CarouselsComponent
    },
    {
        path: 'date-time-pickers',
        component: DateTimePickersComponent
    },
    {
        path: 'file-upload',
        component: FileUploadComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'spinners',
        component: SpinnersComponent
    }
];

@NgModule({
    declarations: [
        AccordionsComponent,
        AlertsComponent,
        AutoCompleteComponent,
        CarouselsComponent,
        DateTimePickersComponent,
        FileUploadComponent,
        ModalsComponent,
        NotificationsComponent,
        SpinnersComponent,
        LoginModalComponent,
        RegisterModalComponent
    ],
    providers: [
        AutoCompleterService
    ],
    entryComponents: [
        LoginModalComponent,
        RegisterModalComponent
    ],
    imports: [
        RouterModule.forChild(utilRoutes),
        SharedModule
    ]
})
export class MiscUtilitiesModule { }
