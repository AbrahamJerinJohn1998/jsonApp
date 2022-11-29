import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewUsPublicdataComponent } from './view-us-publicdata/view-us-publicdata.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewUsPublicdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
