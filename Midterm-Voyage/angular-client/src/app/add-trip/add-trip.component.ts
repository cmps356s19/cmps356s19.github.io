import { Component, OnInit } from '@angular/core';
import {data_service} from "../shared/data_service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  countries;

  constructor(private service:data_service, private router:Router) {
    this.getCountries();

  }

  ngOnInit() {
  }

  async getCountries(){
    this.countries = await this.service.getCountries();
  }

async addTrip(theForm: NgForm){
       let countryName = theForm.value.countryName;
        let fromDate= theForm.value.fromDate;
         let toDate= theForm.value.toDate;
         let estimatedBudget= theForm.value.estimatedBudget;
         let tripType= theForm.value.tripType;

let trip={
  countryName : countryName,
  fromDate: fromDate,
  toDate : toDate,
  estimatedBudget: estimatedBudget,
  tripType: tripType,
    tripDate:'',
    rating:''
              }
console.log(trip);

  await this.service.addTrips(trip);

              }





}
