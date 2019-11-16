import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

    constructor(private netSrvc: NetworkService) { }


ordersdetails ={};

  ngOnInit() {
      this.netSrvc.getOrderDetails().subscribe((data: any)=>{
          console.log('invoking');
          console.log(data);
          this.ordersdetails = data;
      })

  }



}
