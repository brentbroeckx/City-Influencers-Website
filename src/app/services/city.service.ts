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

  changeCityStatus(id: string, value: boolean) {
    const changeParam = {
      type: "stad",
      id: id,
      value: value
    }

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.put<any>( environment.API_URL + "activation", changeParam, {headers: headers});

  }


}
