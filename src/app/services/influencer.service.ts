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


  filter(type: string, value: string, array?: string[], numberArray?: number[]) {
    const bearer = localStorage.getItem('token');
    let id = localStorage.getItem('id');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    switch(type) {
      case "name":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers?where=voornaam&like=" + value, {headers: headers});
      case "surname":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers?where=familienaam&like=" + value, {headers: headers});
      case "category":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers?where=categories&like=['" + array + "']", {headers: headers});
      case "gender":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers?where=geslacht&like=" + value, {headers: headers});
      case "followers":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers?where=volgers&like=" + value, {headers: headers});
      case "age":
        return this.httpClient.get<InfluencerApiResponse>( environment.API_URL + "influencers?where=leeftijd&like=[" + numberArray + "]", {headers: headers});
      default:
        return null;
    }





  }
  

}
