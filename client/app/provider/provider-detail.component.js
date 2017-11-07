import {Component} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'provider-detail',
  templateUrl: 'app/provider/provider-detail.component.html'
})

class ProviderDetailComponent {

	static get parameters() {
		return [[ActivatedRoute],[Router]];
	}

	constructor(_route,_router) {
		this._route = _route;
		this._router = _router;
		this.title = 'Provider Detail Component';
		
		this.providers = [
			{
				id: 1,
				npi: 'npi123',
				name: 'Provider 1',
				address: '123 Test NE Albuquerque NM 87113'
			},
			{
				id: 2,
				npi: 'npi123',
				name: 'Provider 2',
				address: '222 San Mateo NE Albuquerque NM 87109'
			},
			{
				id: 3,
				npi: 'npi110',
				name: 'Provider 3',
				address: '52 University Blvd NE Albuquerque NM 87102'
			},
			{
				id: 4,
				npi: 'npi162',
				name: 'Provider 4',
				address: '290 Alameda Albuquerque NM 87113'
			},
			{
				id: 5,
				npi: 'npi162',
				name: 'Provider 1',
				address: '727 Tramway NE Albuquerque NM 87122'
			}
		];

		this.id = this._route.snapshot.paramMap.get('id');
		this.provider = this.providers.find((provider) => provider.id == this.id);
		
	}

	goToProviderList() {
		this._router.navigate(['/providers']);
	}
}

export {ProviderDetailComponent};