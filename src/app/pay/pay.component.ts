import {Component, OnInit} from '@angular/core';
import {PBayStateService} from '../p-bay-state.service';
import {NetworkService} from '../network.service';

@Component({
    selector: 'app-pay',
    templateUrl: './pay.component.html',
    styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

    itemsList: any[];
    shippingAddressList:any[];

    constructor(private pBayState: PBayStateService,private netSrvc: NetworkService) {
    }

    ngOnInit() {
        this.pBayState.basketItemsList.subscribe(itml => this.itemsList = itml);

        this.netSrvc.getShippingAddressList().subscribe((data: any)=>{
            this.shippingAddressList = data;

        });
    }

}

