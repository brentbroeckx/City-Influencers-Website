import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { CityApiResponse } from '../models/cityApiResponse';

import { environment } from 'src/environments/environment';
import { CityRegister } from '../models/cityRegister';
import { CityChange } from '../models/cityChange';

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

  getAllValidatedCities(): Observable<CityApiResponse> {
    const bearer = localStorage.getItem('token');

     let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<CityApiResponse>(environment.API_URL +"cities?where=isnew&like=f", {headers: headers})
  }

  getAllRequestedCities(): Observable<CityApiResponse> {
    const bearer = localStorage.getItem('token');

     let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<CityApiResponse>(environment.API_URL +"cities?where=isnew&like=t", {headers: headers})
  }

  changeCity(city: CityChange){
    const changeParam = {
      type: "stad",
      id: city.id,
      username: city.username,
      name: city.name,
      password: city.password,
      postcode: city.postcode,
      email: city.emailadres,
      isactief: city.isactief
    }
    console.log(city)

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.put<any>( environment.API_URL + "accounts", changeParam, {headers: headers});
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
