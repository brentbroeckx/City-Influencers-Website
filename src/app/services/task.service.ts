import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TaskApiResponse } from '../models/tasksApiResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllTasks(): Observable<TaskApiResponse>{
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<TaskApiResponse>( environment.API_URL + "tasks", {headers: headers});
  }

  getTaskById(id: String): Observable<TaskApiResponse>{
    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.get<TaskApiResponse>( environment.API_URL + "tasks/" + id, {headers: headers});
  }
}
