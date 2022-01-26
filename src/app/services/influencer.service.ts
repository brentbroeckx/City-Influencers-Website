import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Influencer } from '../models/influencer';
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

    return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers", {headers: headers});
  }

  getInfluencerById(id: String) {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<InfluencerApiResponse>(environment.API_URL + "influencers/" + id, {headers: headers})
  }

}
