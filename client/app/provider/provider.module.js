import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProviderRoutingModule} from './provider-routing.module';
import {ProviderListComponent} from './provider-list.component';
import {ProviderDetailComponent} from './provider-detail.component';
import {ProviderSearchPipe} from './provider-search.pipe';


@NgModule({
  declarations: [
    ProviderListComponent,
    ProviderSearchPipe,
    ProviderDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProviderRoutingModule
  ],
  providers: [],
  exports: [ProviderListComponent,ProviderDetailComponent],
  bootstrap: []
})

export class ProviderModule { }
