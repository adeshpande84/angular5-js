import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'providerSearch'
})

export class ProviderSearchPipe {
	transform(providers, searchText) {
		if(!providers || !searchText) {
			return providers;
		}

		return providers.filter(provider => {
			return provider.npi.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
			provider.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
			provider.address.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
		});
	}
} 