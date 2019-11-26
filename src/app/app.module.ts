import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BrowserComponent } from './browser/browser.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrdersHistoryComponent } from './orders-history/orders-history.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    BrowserComponent,
    NavbarComponent,
    OrdersHistoryComponent,
    ListingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
