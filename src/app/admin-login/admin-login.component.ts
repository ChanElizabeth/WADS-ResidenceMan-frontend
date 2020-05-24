import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private route: Router) { }

  onSubmit(){
    if (this.Userform.username == "GoldenLeafAdmin" && this.Userform.password == "golden123leaf456"){
      this.route.navigateByUrl('/dashboard');
    }
  }

  ngOnInit(): void {
  }

}
