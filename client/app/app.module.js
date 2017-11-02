import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ProviderModule} from './provider.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProviderModule
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
