import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public Userform = {
    email: null,
    password: null,
  }

  public error = null;

  constructor(private route: Router, private auth:AdminService, private tok:TokenService) { }

  onSubmit(){
    this.auth.login(this.Userform).subscribe(
      (data:any) => {  
        console.log(data)
        this.tok.handle(data);
        this.auth.setLoggedIn(true);
        this.auth.setRedirectUrl('/dashboard');
        let url =  this.auth.getRedirectUrl(); 
        console.log('Redirect Url:'+ url);
        this.route.navigate([ url ]);			
      },
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit(): void {
    this.auth.setLoggedIn(false);
  }

}
