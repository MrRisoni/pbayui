import { Component, OnInit } from '@angular/core';
import {PBayService} from '../pbay-srvc.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails;

  constructor(private pbaySrvc: PBayService) { }
  ngOnInit(): void {
    this.pbaySrvc.getOrderDetails().subscribe(data => this.orderDetails = data);

  }

}
