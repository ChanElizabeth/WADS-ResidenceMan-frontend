import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {

  constructor(private auth:AuthService, private token:TokenService, private route:Router) { }

  public Tokenform = {
    token: this.token.getToken(),
  }

  loggedInStatus: boolean;

  logout(){
    this.auth.logOut(this.Tokenform).subscribe(
      data => { 
        this.token.remove();
        this.route.navigateByUrl('/admin');	
      })
    this.auth.setLoggedIn(false);
  }

  ngOnInit(): void {
    this.loggedInStatus = this.auth.isLoggedIn();
  }

}
