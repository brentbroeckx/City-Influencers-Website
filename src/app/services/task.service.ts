import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TaskApiResponse } from '../models/tasksApiResponse';
import { environment } from 'src/environments/environment';
import { TaskChange } from '../models/taskChange';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  changeTask(task: TaskChange){
    const changeParam = {

      taskid: task.taskid,
      title: task.title,
      description: task.description,
      totalpointsworth: task.totalpointsworth,
      picture: task.picture,
      winnerid: task.winnerid,
      categories: task.categories
    }

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.put<any>( environment.API_URL + "tasks", changeParam, {headers: headers});
  }

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

  createTask(task: TaskChange){
    const createParam = {
      title: task.title,
      description: task.description,
      totalpointsworth: task.totalpointsworth,
      picture: task.picture,
      winnerid: task.winnerid
    }

    const bearer = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${bearer}`
    })

    return this.httpClient.post<any>( environment.API_URL + "tasks", createParam, {headers: headers});
  }
}
