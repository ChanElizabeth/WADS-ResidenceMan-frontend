import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  public Userform = {
    email: null,
    password: null,
  }

  public error = null;
  
  constructor(private Login:LoginService,
    private route: Router,
    private auth: AuthService,) { }

  onSubmit(){
    this.Login.login(this.Userform).subscribe(
      data => {
        if(data.success){
          // console.log(data)
          this.handleResponse()
        }
        else{
          this.auth.setLoggedIn(false);
          error => this.handleError(error)
        }
      } 
      // data => console.log(data),
      // error => this.handleError(error)
    );
  }

  handleResponse(){
    // if(data.success){
    //   this.auth.setLoggedIn(true);
    //   this.route.navigate(['/home']);
    // }
    this.auth.setLoggedIn(true);
    let url =  this.auth.getRedirectUrl(); 
			 console.log('Redirect Url:'+ url);
			 this.route.navigate([ url ]);			
    // this.auth.setLoggedIn(true);
    // this.route.navigateByUrl('/home');
        // this.Token.handle(data);
  }

  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
