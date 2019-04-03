import { Component, OnInit } from '@angular/core';
import {data_service} from "../shared/data_service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-complete-trips',
  templateUrl: './complete-trips.component.html',
  styleUrls: ['./complete-trips.component.css']
})
export class CompleteTripsComponent implements OnInit {

  trip;

  constructor(private service: data_service,private router: Router) {
    this.trip = this.service.getTrip();
  }

  ngOnInit() {
  }

  async updateTrip(theForm: NgForm){

    this.trip.tripDate = theForm.value.completedDate;
    this.trip.rating = theForm.value.tripRating;
    console.log(this.trip);
    await this.service.updateTrips(this.trip);
    this.router.navigate(['/list'])

  }

  prettifyDate(date){
    if(date != '') {
      let splitah = date.split('-');
      let spliter = splitah[2].split('T');
      return splitah[0] + '/' + splitah[1] + '/' + spliter[0];
    }
  }

}
