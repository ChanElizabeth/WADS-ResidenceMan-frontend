import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public Userform = {
    username: null,
    password: null,
  }

  public error = null;

  constructor(private route: Router, private auth:AdminService) { }

  onSubmit(){
    if (this.Userform.username == "GoldenLeafAdmin" && this.Userform.password == "golden123leaf456"){
      // this.route.navigateByUrl('/dashboard');

      this.auth.setLoggedIn(true);
      this.auth.setRedirectUrl('/dashboard');
      let url =  this.auth.getRedirectUrl(); 
      console.log('Redirect Url:'+ url);
      this.route.navigate([ url ]);			
    }
  }

  ngOnInit(): void {
  }

}
