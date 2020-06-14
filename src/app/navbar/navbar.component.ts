import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService, private token:TokenService, private route:Router) { }

  public Tokenform = {
    token: this.token.getToken(),
  }

  loggedInStatus: boolean;

  logout(){
    this.auth.logOut(this.Tokenform).subscribe(
      data => { 
        this.token.remove();
        this.route.navigateByUrl('');	
      })
  }
  
  ngOnInit(): void {
    this.loggedInStatus = this.auth.isLoggedIn();
  }

}
