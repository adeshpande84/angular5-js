import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatAll';
import {DataService} from '../shared/data.service.js';

export class ProviderService {

	static get parameters() {
		return [[DataService]];
	}

	constructor(dataService) {
		this.dataService = dataService;
	}

	getProviderList() {
		return this.dataService.get('app/shared/provider-list.json');
	}

	getProvider(id) {
		
		return this.dataService.get('app/shared/provider-list.json').concatAll().filter(provider => provider.id == id);
	}

}