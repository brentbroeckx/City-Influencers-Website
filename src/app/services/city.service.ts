import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { CityApiResponse } from '../models/cityApiResponse';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  getCityById(id: String) {
    const bearer = localStorage.getItem('token');

     let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<CityApiResponse>(environment.API_URL +"cities/" + id, {headers: headers})
  }

  getAllCities(): Observable<CityApiResponse> {
    return this.httpClient.get<CityApiResponse>( environment.API_URL +"cities");
  }

  testPut() {

     var test = {
      "type": "stad"
    }

    let headers = new HttpHeaders({
      'Authorization': `Bearer 974af22918314c0ec722c02a51588e5302afd8cc5bbb45609a0aa0a375b1551ebe9ca42a5aa72a7f293b30ba0d13c59b674e6deec5b272b61d6ea64ba59ff58f`
    })

    return this.httpClient.put<any>("http://api-ci.westeurope.cloudapp.azure.com:8080/api/accounts", test, {headers: headers})
  }


}
