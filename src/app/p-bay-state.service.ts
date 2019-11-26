import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class PBayStateService {


    private basketItemIdsSource = new BehaviorSubject([1, 4]);
    basketItemsList = this.basketItemIdsSource.asObservable();


    shippingAddress:{}
    billingAddress:{}


    constructor() {
    }
}
