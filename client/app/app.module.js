import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {ProviderModule} from './provider/provider.module.js';

import {AppComponent} from './app.component';

const appRoutes = [
  { 
    path: '',
    redirectTo: '/providers',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProviderModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
