import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Influencer } from '../models/influencer';
import { InfluencerApiResponse } from '../models/influencerApiResponse';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllInfluencers(): Observable<InfluencerApiResponse> {
    const bearer = localStorage.getItem('token');
    let id = localStorage.getItem('id');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers", {headers: headers});
    

  }

  getInfluencersFiltered(category: string, name: string): Observable<InfluencerApiResponse> {
    const bearer = localStorage.getItem('token');
    let id = localStorage.getItem('id');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    console.log('id: ' + id + ' name: ' + name);

    return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=voornaam&like=" + name, {headers: headers});

  }


  getInfluencerById(id: String) {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<InfluencerApiResponse>(environment.API_URL + "influencers/" + id, {headers: headers})
  }


  getInfluencerCount(id: string) {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers", {headers: headers});
    
  }

}
