import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

interface myData{
  obj: Object
}

@Injectable({
  providedIn: 'root'
})

export class ComplaintService {

  constructor(private http:HttpClient, private token:TokenService) { }

  tok = this.token.getToken();

  complaints(data){
    return this.http.post<myData>('http://localhost:8000/api/complaint', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
    })
  }

  getComplaints(){
    return this.http.get('http://localhost:8000/api/complaint');
  }
}
