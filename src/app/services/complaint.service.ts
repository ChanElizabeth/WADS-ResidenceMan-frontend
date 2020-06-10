import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

interface myData{
  obj: Object
}

const API_URL: string = 'https://backend.goldenleaf.codes';

@Injectable({
  providedIn: 'root'
})

export class ComplaintService {

  constructor(private http:HttpClient, private token:TokenService) { }

  tok = this.token.getToken();

  complaints(data){
    return this.http.post<myData>(API_URL + '/api/complaint', data, {
      headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${this.token.getToken()}`  }
    })
  }

  getComplaints(){
    return this.http.get(API_URL + '/api/complaint');
  }
}
