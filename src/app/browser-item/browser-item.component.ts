import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-browser-item',
    templateUrl: './browser-item.component.html',
    styleUrls: ['./browser-item.component.css']
})
export class BrowserItemComponent implements OnInit {

    @Input() listItmObj;

    constructor() {
    }

    ngOnInit() {
    }

}
