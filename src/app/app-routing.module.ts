import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailsComponent} from './order-details/order-details.component';
import {BrowserComponent} from './browser/browser.component';
import {OrdersHistoryComponent} from './orders-history/orders-history.component';
import {ListingDetailsComponent} from './listing-details/listing-details.component';


const routes: Routes = [
    {path: 'order', component: OrderDetailsComponent},
    {path: 'orders/history', component: OrdersHistoryComponent},
    {path: 'item', component: ListingDetailsComponent},

    {path: '', component: BrowserComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
