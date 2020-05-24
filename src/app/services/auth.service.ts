import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData{
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private redirectUrl: string = '/home';
	private loginUrl: string = '/login';
	// private isloggedIn: boolean = false;
  // private loggedInUser: User;
  
  private loggedInStatus: boolean = false;

  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post<myData>('http://localhost:8000/api/login', data, {
      headers: { 'Accept': 'application/json', 'Authorization': 'Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzdkMzI4MzFlOGE0ZjhlM2M5NTRmODk0MGJiYmNiZjhiYTEwMmYzMWVhNTMzNmUzZTY1ZTUxZmJmOGJjNWMwOWI0Yjg4NGQ3NzBhZjM1MGIiLCJpYXQiOjE1ODk3OTk2NzgsIm5iZiI6MTU4OTc5OTY3OCwiZXhwIjoxNjIxMzM1Njc4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.08iR_MTuPlLbrzZZ8VplJdA94zKB6HgMwwJ9S3OrCp6bH2kTXLi39rEgTUy5ikGp_XzSCvSRt3IPNreNDxJsYDI_hJCWlXKFqiEyhLjm-5KSURJeEDOASI9hB9aowNRel2paORPeCqCjbVCCF90URtzjuePc7q2QK0rJMczxvZ2O5KkinbcvcWuHSUCSIVknfOL0JXelnu35o04t44Tl2b988mYAwYhRqQCnFN2lhn9QUpZk3_9AQxFgsQYHFVa3SI0aWJRr7d0g2RhO3UsciI2ijaHhNaGztPbeUmbmbkq-hAEcG-kibartENfTYXldvRhFPk5jpR0YdO6JeCFkCTZ8CT0Uel8yAx8Ssu-PyBTYSA1jTHFpp6o_nfXtJ5DQ0N0NkhOu1xUQmhQerdOFqZX4Nfzw7DndWbMVf1PrXNSGGAHuzudOD04RKn-qPGBapgxTZPXNHOdoZ2iTlnknn8ob7KAcHA7foakbOBRbIYHCU6NS9bVR59e7nWn7BWa2CV3WD2Sc_2mZx9N4woSvZAqCAhsBd-kXEEmWjrCqDt2X67EVKFiJldDH27CmBvANSX9ZXLI5-7HKz6EcthF434y2wv_Il5OiZEslRQKs36czMsJJ7RhLL6Sbgww9O_sezIIiTUAykXiexo4tSXBhUzq09k8foQVScf1UWCkRoBc' }
    }
  )
}

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  isLoggedIn(): boolean{
    return this.loggedInStatus;
  }

  // setUrl(redirectUrl: string){
  //   this.Url = redirectUrl
  // }

  // get isRedirectUrl(){
  //   return this.Url;
  // }

	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}
}
