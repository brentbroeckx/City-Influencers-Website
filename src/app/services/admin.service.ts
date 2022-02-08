import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminCreate } from '../models/AdminCreate';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  getRequestedCities(){
    const bearer = localStorage.getItem('token');

     let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    //return this.httpClient.get<CityApiResponse>(environment.API_URL +"cities/", {headers: headers})
  }

  createAdmin(admin: AdminCreate){
    const createParam = {
      username: admin.username,
      password: admin.password,
      firstname: admin.firstname,
      lastname: admin.lastname,
      email: admin.email
    }

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.post<any>( environment.API_URL + "accounts", createParam, {headers: headers});
  }
}
