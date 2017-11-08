import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class DataService {
	
	static get parameters() {
		return [[HttpClient]];
	}

	constructor(http) {
		this.http = http;
	}


	get(url) {
		return this.http.get(url);
	}
}