import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { rootRoutes } from './routes';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_BASE_HREF } from '@angular/common';
import { environment } from './../environments/environment';

import { NavigationService } from './shared/services/navigation.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      useHash: false
    }),
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NavigationService,
    {
      provide: APP_BASE_HREF,
      useValue: `${environment.BASE_URL}`
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
