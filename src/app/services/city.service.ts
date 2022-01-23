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
      'Authorization': `Bearer 8f00dd27caa5886573a851fd09525acaaed52a3c2a3b2efc843ccfec4354e1e8e406e77b4beeaab858b2893a5b637f621a00f4e63895fbfe2e81e74846f854c1`
    })

    return this.httpClient.get<City>("http://192.168.56.101:8080/api/cities/" + id, {headers: headers})
    

  }

  getAllCities(): Observable<CityApiResponse> {
    return this.httpClient.get<CityApiResponse>("http://192.168.56.101:8080/api/cities");
  }


}
