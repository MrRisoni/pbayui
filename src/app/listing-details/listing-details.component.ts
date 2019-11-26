import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../network.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

    constructor(private netSrvc: NetworkService) {
    }

    itemDetails ={};
    continents = [];

    ngOnInit() {

        this.netSrvc.getContinents().subscribe((data: any)=>{
            this.continents = data;
        });

        this.netSrvc.getItemDetails().subscribe((data: any)=>{
            this.itemDetails = data;
        });



    }

}
