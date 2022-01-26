import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityRegister } from '../models/cityRegister';
import { DefaultApiResponse } from '../models/defaultApiResponse';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }


  processLogin(city: CityRegister): Observable<DefaultApiResponse> {

    return this.httpClient.post<DefaultApiResponse>(environment.API_URL + "register", city);

  }

}
