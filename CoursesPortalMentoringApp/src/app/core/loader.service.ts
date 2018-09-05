import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * LoaderIndicatorService - to show preloader icon while request was sent and wait for response
 */
@Injectable()
export class LoaderService {

    /**
     * loading counter
     * @type {number}
     */
    private loadingCounter: number = 0;

    /**
     * Promise object to subscribe
     * @type {Subject<any>}
     */
    private subject: Subject<boolean> = new Subject();

    /**
     * Activate loading
     * @returns {() => void}
     */
    public activateLoading(): () => void {
        this.loadingCounter++;
        let resolved = false;
        this.subject.next(!!this.loadingCounter);
        return () => {
            if (!resolved) {
                resolved = true;
                this.loadingCounter--;
                this.subject.next(!!this.loadingCounter);
            }
        };
    }

    /**
     * Subscribe to loading subject
     * @param fn
     * @returns {Subscription}
     */
    public subscribe(fn) {
        return this.subject.subscribe(fn);
    }
}
