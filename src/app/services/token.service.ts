import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token){
    this.set(token);
    console.log(this.payload(token));
  }

  set(token){
    localStorage.setItem('token',  JSON.stringify(token.access_token));
  }

  get(){
    return JSON.parse(localStorage.getItem('token'));
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get() 
    if(token){
      const payload = this.payload(token);
    }
  }

  payload(token){
    return token.split('.')[1];
  }
}

