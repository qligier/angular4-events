# Events Service for Angular 4

Events is a publish-subscribe style event system based on [sqlProvider/angular2-pubsub](https://github.com/sqlProvider/angular2-pubsub) and modified to be similar to ionic-angular/Events.

## Usage
 - Import service in your codes or download via npm.

   - Angular 4: `npm install --save angular4-events@4.0.1`
   - Angular 5 and 6: `npm install --save angular4-events@latest`

 - Add module bundle to imports in your application.
```typescript
...

import { EventsModule } from 'angular4-events';

@NgModule({
	declarations: [
		...
	],
	imports: [
		...
		EventsModule.forRoot()
	]
})

...
```
 - And import service wherever you want

## Documentation

#### Class Overview

```typescript
declare class EventsService {
	private events: Object;
	publish(event: string, eventObject?: any): void;
	subscribe(): undefined;
	subscribe(event: string): Observable<any>;
	subscribe(event: string, callback: (value: any) => void): Subscription;
	subscribe(event: string, callback: (value: any) => void, error: (error: any) => void): Subscription;
	subscribe(event: string, callback: (value: any) => void, error: (error: any) => void, complete: () => void): Subscription;
}
```

#### EventsService.publish(event: string, eventObject?: any): void
	
Publish event to all subscriber.

etc.
```typescript
export class OverlayComponent implements OnInit, OnDestroy {
	constructor(private events: EventsService) { }

	anyFunc(){
		this.events.publish('pleaseCloseSidenav', 'helloIAmOverlay');
	}
}
```

#### EventsService.subscribe(event: string): Observable<any>

Subscribe to channel. 

etc.
```typescript
export class NavigationComponent implements OnInit, OnDestroy {
	sideanvSub: any;
	
	constructor(private pubsub: EventsService) { }

	ngOnInit() {
		// usage of subscribe(event: string): <Observable<any>>;
		this.closeSidenavSub = this.pubsub.subscribe('pleaseCloseSidenav').subscribe((from) => {
			this.sidenavOpened = false;
		});

		// usage of subscribe(event: string, callback: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
		this.openSidenavSub = this.pubsub.subscribe('pleaseOpenSidenav', (from) => {
			this.sidenavOpened = true;
		});
	}
	ngOnDestroy() {
		this.closeSidenavSub.unsubscribe();
		this.openSidenavSub.unsubscribe();
	}
```


## Build the source

Follow the steps to run the tests and build the source code.
```sh
npm install
npm test
npm run build
```
Commands above will generate the ready to use bundles under the `./dist` folder.
