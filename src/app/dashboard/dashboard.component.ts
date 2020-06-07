import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ComplaintService } from '../services/complaint.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lstofcomplaints;
  lstofreservations;

  constructor(private complaintService:ComplaintService, private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.complaintService.getComplaints().subscribe(
      data => {
        this.lstofcomplaints = data
      }
    )

    this.reservationService.getReservations().subscribe(
      data => {
        this.lstofreservations = data
      }
    )
  }
}
