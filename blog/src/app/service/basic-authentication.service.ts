import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
export const TOKEN = 'token';
export const AUTHENTICATE_USER = 'authenticateUser';
export const SESSION_ID = 'sessionId';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  flag: boolean = true;

  constructor(private http: HttpClient,
    private router: Router) { }

  executeJWTAuthenticationService(loginPayload: { email_id: any; password?: string; }) {
    debugger;
    return this.http.post<any>(
      `http://localhost:8085/authentication/sign-in`, loginPayload).pipe(
        map(
          data => {
            var output = [];
            for (let element in data) {
              output.push({
                id: element,
                name: data[element]
              });
            }
            sessionStorage.setItem(AUTHENTICATE_USER, loginPayload.email_id);
            sessionStorage.setItem(TOKEN, "Bearer "+`${output[1].name.access_token}`);
            return output;
          }
        )
      );

  }

  getAuthenteUser() {
    return sessionStorage.getItem(AUTHENTICATE_USER);
  }

  getAuthenteToken() {
    if (this.getAuthenteUser())
      return sessionStorage.getItem(TOKEN);
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATE_USER);
    return !(user == null);

  }

  logoutauto() {
    let userEmail = sessionStorage.getItem(AUTHENTICATE_USER);
    let sessionId = sessionStorage.getItem(SESSION_ID);

    const autoLogout = {
      "email": userEmail,
      "logoutMethod": "sessionTimeOut",
      "sessionId": sessionId
    };
    return this.http.post(`localhost/logoutUser`, autoLogout, { responseType: 'text' });

  }

  // logout() {
  //   sessionStorage.removeItem(AUTHENTICATE_USER);
  //   sessionStorage.removeItem(TOKEN);
  //   sessionStorage.removeItem(sessionStorage.getItem(COMPANY_NAME));
  //   sessionStorage.removeItem(SESSION_ID);
  // }

  // startUserIdle() {
  //   //Start watching for user inactivity.
  //   this.userIdle.startWatching();

  //   this.userIdle.onTimerStart().subscribe((count: any) => {
  //     var eventList = ["click", "mouseover", "keydown", "DOMMouseScroll", "mousewheel",
  //       "mousedown", "touchstart", "touchmove", "scroll", "keyup"];
  //     for (let event of eventList) {
  //       document.body.addEventListener(event, () => this.userIdle.resetTimer());
  //     }
  //   });

  //   // Start watch when time is up.
  //   this.flag = true;
  //   this.userIdle.onTimeout().subscribe(() => {
  //     if (this.flag === true) {
  //       this.logoutauto().subscribe(
  //         data => {
  //           let initialState = {
  //             title: 'Information',
  //             btn2: 'OK',
  //             body: 'Session time out due to user inactivity!!!!',
  //             enableBtn2: true,
  //           };

  //           this.bsModalRef = this.bsModalService.show(GlobalModalComponent, Object.assign({ backdrop: true, ignoreBackdropClick: true, keyboard: false }, { initialState }));

  //           this.userIdle.stopWatching();
  //           this.userIdle.stopTimer();
  //           this.router.navigate(['/authentication/login']);
  //           this.logout();

  //         },
  //         error => {
  //           console.log(error);           
  //         });

  //       this.flag = false;
  //     }
  //   });

  // }  // end of 

}
