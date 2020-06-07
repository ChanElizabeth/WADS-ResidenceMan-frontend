import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

interface myData{
  obj: Object
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient, private token:TokenService) { }

  news(data){
    return this.http.post<myData>('http://localhost:8000/api/new', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
    }
    )
  }

  getNews(){
    return this.http.get('http://localhost:8000/api/new');
  }
}
