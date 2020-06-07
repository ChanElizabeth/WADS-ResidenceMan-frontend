import { Component, OnInit } from '@angular/core';
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
    private auth: AuthService,
    private tok: TokenService) { }

  onSubmit(){
    this.Login.login(this.Userform).subscribe(
      (data:any) => {  
        console.log(data)
        this.tok.handle(data);
        this.auth.setLoggedIn(true);
        this.auth.setRedirectUrl('/home');
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
