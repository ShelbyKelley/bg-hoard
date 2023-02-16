import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { MatCardModule } from '@angular/material/card';
import { UiSharedModule } from '@bg-hoard/store/ui-shared';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    UiSharedModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
