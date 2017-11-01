//import 'reflect-metadata';
//import 'core-js/es6/reflect';
//import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
//import 'core-js/client/shim';
//import 'zone.js/dist/zone';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

const greeting = document.getElementById('greeting');
greeting.innerText = 'Nice to see you!';

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.log(err));