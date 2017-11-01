import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

class AppComponent {
	constructor() {
		this.title = 'App Root Component';
		this.description = 'Angular 4 App created with ES6, Babel, Webpack. This app does not use typescript';
	}
}

export {AppComponent};