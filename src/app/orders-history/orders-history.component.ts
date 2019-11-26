import {Component, OnInit} from '@angular/core';
import {NetworkService} from '../network.service';

@Component({
    selector: 'app-orders-history',
    templateUrl: './orders-history.component.html',
    styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

    constructor(private netSrvc: NetworkService) {
    }

    ordersHistory =[];


    ngOnInit() {
        this.netSrvc.getOrdersHistory().subscribe((data: any)=>{
            this.ordersHistory = data;

        })

    }
}
