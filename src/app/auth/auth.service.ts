import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthIdResponse } from './authIdReponse';
import { AuthTokenResponse } from './authTokenResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getLocalToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  getLocalId(): string {
    return localStorage.getItem('id') ?? '';
  }

  getId(): Observable<AuthIdResponse> {
    const bearer = this.getLocalToken();
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })
    return this.httpClient.post<any>("http://192.168.56.101:8080/api/id", {headers: headers})
  }

  // CHANGE ANY TYPE TO USER TYPE WITH CITY PARAMS
  getUser(): any | null {
    if (this.isLoggedIn()) {
      var id = localStorage.getItem('id');
      this.getUserDetails(id).subscribe(res => {
        return res.data;
      })
    } else {
      return null;
    }

  } 

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: any): Observable<AuthTokenResponse> {
    return this.httpClient.post<any>("http://192.168.56.101:8080/api/login", user)
  }

  getUserDetails(id: string | null): Observable<any> {

    const bearer = localStorage.getItem('token')
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })
    return this.httpClient.post<any>("http://192.168.56.101:8080/api/cities/" + id, {headers: headers})
  }

  deleteToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }


}
