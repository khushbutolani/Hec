import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export const TOKEN = 'token';
export const AUTHENTICATE_USER = 'authenticateUser';
export const SESSION_ID = 'sessionId';


@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private http: HttpClient
    //private userIdle: UserIdleService
    ) { }


  executeAuthenticationService(loginPayload) {
    let basicAuthString = 'Basic ' + window.btoa(loginPayload);

    let headers = new HttpHeaders({
      Authorization: basicAuthString
    })
    return this.http.get<any>(`/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATE_USER, loginPayload.email_id);
            sessionStorage.setItem(TOKEN, basicAuthString);
            return data;
          }
        )
      );

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user == null);

  }


  logout(logoutMethod: any) {
    this.logoutUser(logoutMethod).subscribe(
      data => {
        this.userIdle.stopWatching();
        this.userIdle.stopTimer();
        sessionStorage.removeItem(AUTHENTICATE_USER);
        sessionStorage.removeItem(TOKEN);
        sessionStorage.removeItem("permissions")
      },
      error => {
        console.log(error)
      });
  
  }

  logoutUser(logoutMethod: any){
    let userEmail = sessionStorage.getItem(AUTHENTICATE_USER);
    let sessionId = sessionStorage.getItem(SESSION_ID);
    const autoLogout ={"email":userEmail,
                      "logoutMethod":logoutMethod,
                      "sessionId":sessionId};
    return this.http.post(`${environment.LOGIN_API_URL}/logoutUser`,autoLogout,{responseType: 'text'});

  }
}
