import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //local: http://localhost:8080/users/register
    // dist: user/register
    return this.http.post('http://localhost:8080/users/register', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateUser(user){
    let headers = new Headers();
    //local: http://localhost:8080/users/authenticate
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/users/authenticate', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  getProfile(){
    this.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    //local: http://localhost:8080/users/profile
    return this.http.get('http://localhost:8080/users/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    // localStorage only stores stings
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
