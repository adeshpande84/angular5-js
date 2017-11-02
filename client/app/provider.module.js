import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProviderListComponent} from './provider-list/provider-list.component.js';

@NgModule({
  declarations: [
    ProviderListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ProviderListComponent],
  bootstrap: []
})

export class ProviderModule { }
