import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';

const ServiceName: string = "Events Service";

@Injectable()
export class EventsService implements IEventsService {
    private events = {};

    constructor() {}

    public subscribe(event: string): Observable<any>;
    public subscribe(event: string, callback: (value: any) => void): Subscription;
    public subscribe(event: string, callback: (value: any) => void, error: (error: any) => void): Subscription;
    public subscribe(event: string, callback: (value: any) => void, error: (error: any) => void, complete: () => void): Subscription;
    public subscribe(event: string, callback?: (value: any) => void, error?: (error: any) => void, complete?: () => void) {
        if (!event) {
            throw new Error(`[${ServiceName}] => Subscription method must get event name.`);
        }

        if (this.events[event] === undefined) {
            this.events[event] = new Subject<any>();
        }

        if (typeof callback !== 'function') {
            return this.events[event].asObservable();
        }
        else {
            return this.events[event].asObservable().subscribe(callback, error, complete);
        }
    }

    public publish(event: string, eventObject?: any): void {
        if (!event) {
            throw new Error(`[${ServiceName}] => Publish method must get event name.`);
        }
        else if (!this.events[event]) {
            return;
        }

        this.events[event].next(eventObject);
    }
}

export interface IEventsService {
    publish(event: string, eventObject?: any): void;
    subscribe(event: string): Observable<any>;
    subscribe(event: string, callback: (value: any) => void): Subscription;
    subscribe(event: string, callback: (value: any) => void, error: (error: any) => void): Subscription;
    subscribe(event: string, callback: (value: any) => void, error: (error: any) => void, complete: () => void): Subscription;
}

interface ISubscribe{
    (event: string): Observable<any>;
    (event: string, callback: (value: any) => void): Subscription;
    (event: string, callback: (value: any) => void, error: (error: any) => void): Subscription;
    (event: string, callback: (value: any) => void, error: (error: any) => void, complete: () => void): Subscription;
}