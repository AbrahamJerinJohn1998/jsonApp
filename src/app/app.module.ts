import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPassengerComponent } from './view-passenger/view-passenger.component';
import { ViewUsPublicdataComponent } from './view-us-publicdata/view-us-publicdata.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ViewProductListComponent } from './view-product-list/view-product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:ViewPassengerComponent
  },
  {
    path:"viewusdata",
    component:ViewUsPublicdataComponent
  },
  {
    path:"viewuserinfo",
    component:ViewUserInfoComponent
  },
  {
    path:"viewproductlist",
    component:ViewProductListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewUsPublicdataComponent,
    ViewUserInfoComponent,
    ViewProductListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
