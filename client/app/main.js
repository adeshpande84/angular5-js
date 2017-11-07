import 'zone.js/dist/zone';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const greeting = document.getElementById('greeting');
greeting.innerText = 'Nice to see you!';

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.log(err));