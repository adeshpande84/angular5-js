import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

class AppComponent {
	constructor() {
		this.title = 'Root Component';
		this.description = '';
	}
}

export {AppComponent};