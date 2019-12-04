import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../network.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
    constructor(private netSrvc: NetworkService) { }


    filterVals ={};
    listings =[];

    ngOnInit() {
        this.netSrvc.getSearchResults().subscribe((data: any)=>{
            console.log('invoking');
            this.filterVals = data.filterVals;
            this.listings = data.listings;


            console.log(this.listings);
        })

    }

}
