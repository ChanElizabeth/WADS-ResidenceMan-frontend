import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface myData{
//   success: string,
//   message: string
// }

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(data){
      return this.http.post('http://localhost:8000/api/login', data, {
      }
    )
  }
}
