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
    shippingAddressList:any[];


    ngOnInit() {


        this.netSrvc.getItemDetails().subscribe((data: any)=>{
            this.itemDetails = data;
        });

        this.netSrvc.getShippingAddressList().subscribe((data: any)=>{
            this.shippingAddressList = data;

        });


    }

}
