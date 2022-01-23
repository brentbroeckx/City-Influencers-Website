import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { CityApiResponse } from '../models/cityApiResponse';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  getCity() {

    const id = localStorage.getItem('id');
    const bearer = localStorage.getItem('token');

     let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<City>("http://192.168.56.101:8080/api/cities/" + id, {headers: headers})
    

  }

  getAllCities(): Observable<CityApiResponse> {
    return this.httpClient.get<CityApiResponse>("http://192.168.56.101:8080/api/cities");
  }


}
