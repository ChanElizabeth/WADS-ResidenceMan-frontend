import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  public ComplaintsForm = {
    name: null,
    email: null,
    phoneNo: null,
    subject: null,
    complaint: null
  }

  constructor(private complaintService:ComplaintService) { }

  onSubmit(){
    this.complaintService.complaints(this.ComplaintsForm).subscribe(
      data => { 
          console.log(data.obj)   
          window.alert("Added Successfully!")  
      } 
    );
  }

  ngOnInit(): void {
  }

}
