import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfluencerApiResponse } from '../models/influencerApiResponse';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private httpClient: HttpClient) { }

  getAllInfluencers() {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<InfluencerApiResponse>("http://192.168.56.101:8080/api/influencers", {headers: headers});
  }
}
