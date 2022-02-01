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

  getInfluencerById(id: String) {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<InfluencerApiResponse>(environment.API_URL + "influencers/" + id, {headers: headers})
  }


  filter(type: string, value: string) {
    const bearer = localStorage.getItem('token');
    let id = localStorage.getItem('id');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    switch(type) {
      case "name":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=voornaam&like=" + value, {headers: headers});
      case "surname":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=familienaam&like=" + value, {headers: headers});
      case "category":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=categories&like=['" + value + "']", {headers: headers});
      case "gender":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=geslacht&like=" + value, {headers: headers});
      case "followersinstagram":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=aantalvolgersinstagram&like=" + value, {headers: headers});
      case "followersfacebook":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=aantalvolgersfacebook&like=" + value, {headers: headers});
      case "followerstiktok":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=aantalvolgerstiktok&like=" + value, {headers: headers});
      case "age":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "cities/" + id + "/influencers?where=leeftijd&like=" + value, {headers: headers});
      default:
        return null;
    }





  }
  

}
