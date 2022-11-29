import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewUsPublicdataComponent } from './view-us-publicdata/view-us-publicdata.component';
import { ViewPublicAPIlinksdataComponent } from './view-public-apilinksdata/view-public-apilinksdata.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewUsPublicdataComponent,
    ViewPublicAPIlinksdataComponent,
    ViewUserInfoComponent,
    ViewProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
