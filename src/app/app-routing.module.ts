import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderDetailsComponent} from './order-details/order-details.component';

const routes: Routes = [ {
  path: 'order/details',
  component: OrderDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
