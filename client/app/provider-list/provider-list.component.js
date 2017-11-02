import {Component} from '@angular/core';

@Component({
  selector: 'provider-list',
  templateUrl: 'app/provider-list/provider-list.component.html'
})

class ProviderListComponent {
	constructor() {
		this.title = 'Provider List Component';
		this.providers = [
			{
				npi: 'npi123',
				name: 'Provider 1',
				address: '123 Test NE Albuquerque NM 87113'
			},
			{
				npi: 'npi135',
				name: 'Provider 2',
				address: '222 San Mateo NE Albuquerque NM 87109'
			},
			{
				npi: 'npi110',
				name: 'Provider 3',
				address: '52 University Blvd NE Albuquerque NM 87102'
			},
			{
				npi: 'npi162',
				name: 'Provider 4',
				address: '290 Alameda Albuquerque NM 87113'
			},
			{
				npi: 'npi175',
				name: 'Provider 1',
				address: '727 Tramway NE Albuquerque NM 87122'
			}
		];
	}
}

export {ProviderListComponent};