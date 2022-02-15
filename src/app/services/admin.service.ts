import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminCreate } from '../models/AdminCreate';
import { AdminApiResponse } from '../models/adminApiResponse';

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

  getAdmins(){
    const bearer = localStorage.getItem('token');

     let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<AdminApiResponse>(environment.API_URL +"admins", {headers: headers})
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

  changeStatusAdmin(id: String, status: boolean){
    const createParam = {
      id: id,
      isactive: status
    }

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.put<any>( environment.API_URL + "admins", createParam, {headers: headers});
  }

  changeSuperAdmin(id: String, status: boolean){
    const createParam = {
      id: id,
      issuper: status
    }

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.put<any>( environment.API_URL + "admins", createParam, {headers: headers});
  }
}
