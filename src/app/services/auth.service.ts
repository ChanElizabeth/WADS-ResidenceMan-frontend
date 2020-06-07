import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private redirectUrl: string = '';
	private loginUrl: string = '/login';

  private loggedInStatus: boolean = false;

  constructor(private http: HttpClient, private token:TokenService) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  isLoggedIn(): boolean{
    return this.loggedInStatus;
  }

	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
  }
  
  logOut(data){
    return this.http.post('http://localhost:8000/api/user/logout', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
  })
}
}
