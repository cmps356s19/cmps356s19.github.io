import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { ListTipsComponent } from './list-tips/list-tips.component';
import { CompleteTripsComponent } from './complete-trips/complete-trips.component';
import { NavbarComponent } from './navbar/navbar.component';
import {data_service} from "./shared/data_service";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes =[
  {path :'',component:AddTripComponent},
  {path :'#',component:NavbarComponent},
  {path :'list',component:ListTipsComponent},
  {path :'complete',component:CompleteTripsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddTripComponent,
    ListTipsComponent,
    CompleteTripsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [data_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
