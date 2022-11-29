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
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewTodoComponent } from './view-todo/view-todo.component'
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
  },
  {
    path:"viewuserdata",
    component:UserDataComponent
  },
  {
    path:"viewtodo",
    component:ViewTodoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewPassengerComponent,
    ViewUsPublicdataComponent,
    ViewUserInfoComponent,
    ViewProductListComponent,
    NavbarComponent,
    UserDataComponent,
    ViewTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
