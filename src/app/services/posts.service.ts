import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostsApiResponse } from '../models/postsApiResponse';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPostsByInfluencerId(id: String) {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
    'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<PostsApiResponse>(environment.API_URL +"influencers/" + id + "/posts", {headers: headers})

  }

  getPostById(influencerId: String, postId: String) {
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
    'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<PostsApiResponse>(environment.API_URL +"influencers/" + influencerId + "/posts/" + postId, {headers: headers})

  }

}
