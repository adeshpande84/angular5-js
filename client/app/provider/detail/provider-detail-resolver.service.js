//import {RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import {ProviderService} from '../provider.service.js';

export class ProviderDetailResolver {
	static get parameters() {
		return [[ProviderService]];
	}

	constructor(providerService) {
		
		this.providerService = providerService;
	}

	resolve(route,state) {
		let id = route.paramMap.get('id');
		
		return this.providerService.getProvider(id);
	}
} 