import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProviderListComponent} from './list/provider-list.component.js';
import {ProviderDetailComponent} from './detail/provider-detail.component.js';
import {ProviderDetailResolver} from './detail/provider-detail-resolver.service.js';

const providerRoutes = [

	{ path: 'providers', component: ProviderListComponent, pathMatch: 'full'},
	{ path: 'provider', component: ProviderDetailComponent, resolve: { prov: ProviderDetailResolver }, pathMatch: 'full'}
]

@NgModule({
	imports: [

		RouterModule.forChild(providerRoutes)
	],

	exports: [
		RouterModule
	],

	providers: [
		ProviderDetailResolver
	]
})

export class ProviderRoutingModule { }