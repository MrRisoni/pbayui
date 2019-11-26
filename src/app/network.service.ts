import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

    constructor(private http: HttpClient) { }

    public getOrderDetails(){
        return this.http.get('http://localhost:3500/api/order');
    }

    public getOrdersHistory(){
        return this.http.get('http://localhost:3500/api/orders');
    }

    public getItemDetails(){
        return this.http.get('http://localhost:3500/api/item');
    }

    public getContinents(){
        return this.http.get('http://localhost:3500/api/continents');
    }
}
