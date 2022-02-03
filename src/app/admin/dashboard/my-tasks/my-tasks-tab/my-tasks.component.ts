import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {

  tasks: Task[] | undefined;

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(res => {
      this.tasks = res.data;
      console.log(this.tasks)
    })
  }


  toDetailPage(id: String) {
    this.router.navigate(['/dashboard/my-tasks/detail', id])
  }
}
