import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {data_service} from "../shared/data_service";

@Component({
  selector: 'app-list-tips',
  templateUrl: './list-tips.component.html',
  styleUrls: ['./list-tips.component.css']
})
export class ListTipsComponent implements OnInit {

  trips;



  ngOnInit() {
  }

  constructor(private service: data_service, private router: Router) {
    this.getTrips();
  }


  async getTrips(){
    this.trips = await this.service.getTrips();
  }

  prettifyDate(date){
    if(date != '') {
      let splitah = date.split('-');
      let spliter = splitah[2].split('T');
      return splitah[0] + '/' + splitah[1] + '/' + spliter[0];
    }
  }

  completeTrip(trip){
    this.service.setTrip(trip);
    this.router.navigate(['/complete'])
  }




}
