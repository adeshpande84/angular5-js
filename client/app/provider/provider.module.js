import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProviderRoutingModule} from './provider-routing.module';
import {ProviderService} from './provider.service';
import {SharedModule} from '../shared/shared.module.js';
import {ProviderListComponent} from './list/provider-list.component.js';
import {ProviderDetailComponent} from './detail/provider-detail.component.js';
import {ProviderSearchPipe} from './list/provider-search.pipe.js';


@NgModule({
  declarations: [
    ProviderListComponent,
    ProviderSearchPipe,
    ProviderDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProviderRoutingModule,
    SharedModule
  ],
  providers: [ProviderService],
  exports: [],
  bootstrap: []
})

export class ProviderModule { }
