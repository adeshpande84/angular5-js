import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProviderListComponent} from './provider-list.component';
import {ProviderDetailComponent} from './provider-detail.component';

const providerRoutes = [

	{ path: 'providers', component: ProviderListComponent, pathMatch: 'full'},
	{ path: 'provider', component: ProviderDetailComponent, pathMatch: 'full'}
]

@NgModule({
	imports: [

		RouterModule.forChild(providerRoutes)
	],

	exports: [
		RouterModule
	]
})

export class ProviderRoutingModule { }