import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

// Service for user login
const API_URL: string = 'https://backend.goldenleaf.codes';

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
  
  login(data){
    return this.http.post(API_URL + '/api/login', data, {
    }
  )}

  logOut(data){
    return this.http.post(API_URL + '/api/user/logout', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
  })
  }
}
