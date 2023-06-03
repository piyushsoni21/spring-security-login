import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private BASE_PATH = 'http://localhost:8080/api/v1/'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username!: String | undefined;
  public password!: String | undefined;

  constructor(private http: HttpClient) {

  }

  callStandaloneAPI(): Observable<any> {
    const endPoint = 'test';
    return this.http.get<any>(this.BASE_PATH + endPoint);
  }

  authenticationService(username: string, password: string): Observable<any> {
    const endPoint = 'login';
    const User = {
      username,
      password

    }
    return this.http.post<any>(this.BASE_PATH + endPoint, User);

  }

  registerSuccessfulLogin(username: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout(): Observable<any> {
    const endPoint = this.BASE_PATH + 'logout';
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
    return this.http.get<any>(endPoint);
  }

  checkAuthorize(): Observable<any> {
    const endPoint = this.BASE_PATH + 'checkauthorize';
    return this.http.get<any>(endPoint);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
