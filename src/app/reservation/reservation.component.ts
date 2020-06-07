import { Component, OnInit } from '@angular/core';
import { Venue } from './venue';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public ReservationsForm = {
    name: null,
    email: null,
    phoneNo: null,
    venue: null,
    dateTime: null,
    description:null
  }

  unavailableDate;
  venue: Venue[];
  
  constructor(private reserService:ReservationService) { }

  onSubmit(){
    this.reserService.reservations(this.ReservationsForm).subscribe(
      data => { 
          console.log(data.obj)   
          window.alert("Added Successfully!")  
      } 
    );
  }

  ngOnInit(): void {
    this.venue = [
      {venueName: "Swimming Pool"},
      {venueName: "Function Hall"}
    ]

    this.reserService.getReservations().subscribe(
      data => {
        this.unavailableDate = data
      }
    )
  }
}
