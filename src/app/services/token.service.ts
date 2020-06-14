import { Injectable } from '@angular/core';

// Service for token
@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() { }

  handle(token){
    this.set(token);
    console.log(this.getToken());
  }

  set(data){
    localStorage.setItem('token', data.success.token )
  }

  getToken(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }
}

