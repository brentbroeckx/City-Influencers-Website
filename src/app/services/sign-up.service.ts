import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityRegister } from '../models/cityRegister';
import { DefaultApiResponse } from '../models/defaultApiResponse';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }


  processLogin(city: CityRegister): Observable<DefaultApiResponse> {

    return this.httpClient.post<DefaultApiResponse>("http://192.168.56.101:8080/api/register", city);

  }

}
