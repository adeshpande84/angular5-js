import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Injector} from '@angular/core';

@Component({
  selector: 'provider-list',
  templateUrl: 'app/provider/provider-list.component.html'
})

class ProviderListComponent {

	static get parameters() {
		return [[Router]];
	}

	constructor(_router) {
		
		this._router = _router;
		this.title = 'Provider List Component';
		this.searchText = '';
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
	}

	onSelectProvider(provider) {
		console.log(provider);
		this._router.navigate(['/provider',{id: provider.id}]);
	}
}

export {ProviderListComponent};