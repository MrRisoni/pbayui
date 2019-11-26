import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrderDetailsComponent} from './order-details/order-details.component';
import {BrowserComponent} from './browser/browser.component';


const routes: Routes = [
    {path: 'order', component: OrderDetailsComponent},
    {path: 'orders', component: OrderDetailsComponent},
    {path: 'item', component: OrderDetailsComponent},

    {path: '', component: BrowserComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
