import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProviderListComponent} from './provider-list/provider-list.component.js';
import {ProviderSearchPipe} from './provider-list/provider-search.pipe.js';


@NgModule({
  declarations: [
    ProviderListComponent,
    ProviderSearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [ProviderListComponent],
  bootstrap: []
})

export class ProviderModule { }
