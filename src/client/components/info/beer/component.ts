import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class BeerInfoComponent implements OnInit, OnDestroy {
    private subscriptions = [];

    constructor(
    ) { }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
        this.subscriptions = [];
    }
}
