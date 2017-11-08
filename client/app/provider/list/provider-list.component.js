import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ProviderService} from '../provider.service.js';

@Component({
  selector: 'provider-list',
  templateUrl: 'app/provider/list/provider-list.component.html'
})

class ProviderListComponent {

	static get parameters() {
		return [[Router],[ProviderService]];
	}

	constructor(_router,providerService) {
		
		this._router = _router;
		this.providerService = providerService;
		this.title = 'Provider List Component';
		this.searchText = '';

		this.providerService.getProviderList().subscribe(resp => {
			this.providers = resp;
		});

	}

	onSelectProvider(provider) {
		
		this._router.navigate(['/provider',{id: provider.id}]);
	}
}

export {ProviderListComponent};