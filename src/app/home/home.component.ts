import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
    this.auth.setLoggedIn(true);
    let url =  this.auth.getRedirectUrl(); 
    console.log('Redirect Url:'+ url);
    this.route.navigate([ url ]);	
  }

}
