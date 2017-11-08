import {Component} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {ProviderService} from '../provider.service.js';

@Component({
  selector: 'provider-detail',
  templateUrl: 'app/provider/detail/provider-detail.component.html'
})

class ProviderDetailComponent {

	static get parameters() {
		return [[ActivatedRoute],[Router],[ProviderService]];
	}

	constructor(_route,_router,providerService) {
		this._route = _route;
		this._router = _router;
		this.providerService = providerService;
		
	}

	ngOnInit() {
		this.title = 'Provider Detail Component';
		
		this._route.data.subscribe((data) => {
			
			this.provider = data.prov;

		});
	}

	goToProviderList() {
		this._router.navigate(['/providers']);
	}
}

export {ProviderDetailComponent};