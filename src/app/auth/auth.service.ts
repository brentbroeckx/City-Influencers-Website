import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthTokenResponse } from './authTokenResponse';
import { TokenValidationResponse } from './tokenValidationResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private toastr: ToastrService, private httpClient: HttpClient, private router: Router) { }

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

    if (bearer == null) {
      this.router.navigateByUrl('/login')
    }

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })
    return this.httpClient.get<TokenValidationResponse>(environment.API_URL + "me", {headers: headers})
  }

  reRouteNonAuth(type: string): any {
    this.validateToken().subscribe(res => {
      console.log(res);
      if (res.error == "AuthTokenExpire") {
        console.log("token expired")
        this.toastr.error("Your login session as expired", "Expired Login")
        this.router.navigateByUrl('/login')
        return true;
      } else if (res.error == "AuthTokenWrong") {
        console.log("Wrong Auth Token!")
        this.toastr.error("Wrong token detected, try logging in again.")
        localStorage.removeItem("token");
        this.router.navigateByUrl('/login')
        return true;
      }
      else if (res.data.type != type) {
        console.log("Trying to access route not meant for: " + res.data.type)
        this.router.navigateByUrl('/')
        return true;
      } else {
        console.log("Verified!")
        return false;
      }

      
    })

  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }


}
