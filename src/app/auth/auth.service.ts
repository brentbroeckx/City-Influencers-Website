import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthTokenResponse } from './authTokenResponse';
import { TokenValidationResponse } from './tokenValidationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  getLocalToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  authenticate(user: any): Observable<AuthTokenResponse> {
    return this.httpClient.post<any>( environment.API_URL + "login", user)
  }

  validateToken() {
    const bearer = localStorage.getItem('token')
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })
    return this.httpClient.get<TokenValidationResponse>(environment.API_URL + "me", {headers: headers})
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }


}
