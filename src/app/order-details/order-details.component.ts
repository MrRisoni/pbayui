import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

constructor(private  httpClient:HttpClient) {}

  ngOnInit() {
  }


  getUser() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }
  
}
